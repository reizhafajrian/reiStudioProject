import {
  CButton,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTabPane,
} from "@coreui/react";
import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Modal = ({
  visible,
  setVisible,
  type,
  dataEdit,
  isRefresh,
  setRefresh,
}) => {
  const [data, setdata] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (type === "edit") {
      setdata({
        id: dataEdit._id,
        name: dataEdit.name,
        email: dataEdit.email,
        address: dataEdit.address,
        phone: dataEdit.phone,
      });
    }
  }, [type]);

  const handleSubmit = async () => {
    try {
      fetch("http://localhost:3000/api/admin/mekanik", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ ...data }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      setRefresh(true);
    } catch (error) {
      throw error;
    }
  };
  const handleEdit = async () => {
    try {
      await fetch("http://localhost:3000/api/admin/mekanik", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({ data: data }),
      });
      setRefresh(!isRefresh);
    } catch (error) {
      throw error;
    }
  };

  const saveData = async () => {
    if (type === "edit") {
      handleEdit();
    } else {
      handleSubmit();
    }

    setVisible(false);
  };

  return (
    <CModal visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle>Tambah Mekanik</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          <>
            <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlInput1">Nama</CFormLabel>
              <CFormInput
                type="text"
                id="name"
                value={data.name}
                placeholder="name"
                onChange={(e) =>
                  setdata({
                    ...data,
                    name: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlInput1">Email</CFormLabel>
              <CFormInput
                type="text"
                id="image"
                value={data.email}
                placeholder="mrjandoe@gmail.com"
                onChange={(e) =>
                  setdata({
                    ...data,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlInput1">Alamat</CFormLabel>
              <CFormInput
                type="text"
                id="image"
                value={data.address}
                placeholder="Jl mr Jan doe"
                onChange={(e) =>
                  setdata({
                    ...data,
                    address: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlInput1">
                Nomor Telfon
              </CFormLabel>
              <CFormInput
                type="text"
                id="image"
                value={data.phone}
                placeholder="081234567890"
                onChange={(e) =>
                  setdata({
                    ...data,
                    phone: e.target.value,
                  })
                }
              />
            </div>
          </>

          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
            <CButton type={"button"} color="primary" onClick={saveData}>
              Save changes
            </CButton>
          </CModalFooter>
        </CForm>
      </CModalBody>
    </CModal>
  );
};

const TableTrue = ({ state, type, deleteFunction, getdata, editFuntion }) => {
  const data = useSelector((state) => state.mekanik);

  return (
    <CTable color="dark" striped>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">#</CTableHeaderCell>
          <CTableHeaderCell scope="col">name</CTableHeaderCell>
          <CTableHeaderCell scope="col">email</CTableHeaderCell>
          <CTableHeaderCell scope="col">phone</CTableHeaderCell>
          <CTableHeaderCell scope="col">address</CTableHeaderCell>

          <CTableHeaderCell scope="col" className={"text-center"}>
            Aksi
          </CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <>
          {data.map((item, index) => {
            return (
              <>
                <CTableRow key={item._id}>
                  <CTableDataCell scope={"row"}>{++index}</CTableDataCell>
                  <CTableDataCell>{item.name}</CTableDataCell>
                  <CTableDataCell>{item.email}</CTableDataCell>
                  <CTableDataCell>{item.phone}</CTableDataCell>
                  <CTableDataCell>{item.address}</CTableDataCell>

                  <CTableDataCell className={"text-center"}>
                    <CButton
                      color="primary"
                      onClick={(e) => editFuntion(e, item)}
                    >
                      Edit
                    </CButton>
                    <CButton
                      color="danger"
                      onClick={(e) => deleteFunction(e, item)}
                    >
                      Delete
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              </>
            );
          })}
        </>
      </CTableBody>
    </CTable>
  );
};

const index = () => {
  const [refresh, setrefresh] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const [type, settype] = useState("");
  const [data, setdata] = useState({});
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const edit = (e, article) => {
    settype("edit");

    setdata(article);
    setshowModal(true);
    e.preventDefault();
  };
  const create = (e, article) => {
    settype("create");

    setshowModal(true);
  };
  const getData = async () => {
    try {
      const postData = await fetch("http://localhost:3000/api/admin/mekanik");
      const res = await postData.json();
      dispatch({
        type: "SET_MEKANIK",
        mekanik: [...res.data],
      });
    } catch (error) {
      throw error;
    }
  };
  const deleteArticle = async (e, article) => {
    try {
      const postData = await fetch(`http://localhost:3000/api/admin/mekanik`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
        body: JSON.stringify({ id: article._id }),
      });
      getData();
    } catch (error) {
      throw error;
    }
  };
  const [activeKey, setActiveKey] = useState(1);
  useEffect(() => {
    getData();
  }, [refresh]);
  return (
    <>
      <CButton color="primary" className={"mb-2"} onClick={create}>
        Create New
      </CButton>

      <TableTrue
        state={state}
        type={true}
        deleteFunction={deleteArticle}
        getdata={getData}
        editFuntion={edit}
      />

      <Modal
        visible={showModal}
        setVisible={setshowModal}
        type={type}
        isRefresh={refresh}
        dataEdit={data}
        setRefresh={setrefresh}
      />
    </>
  );
};
export default index;
