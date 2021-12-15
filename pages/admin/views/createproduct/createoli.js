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
    title: "",
    image1: "",
    image2: "",
    image3: "",
    description: "",
    price: "",
    promo: "",
  });

  useEffect(() => {
    if (type === "edit") {
      console.log(dataEdit);
      setdata({
        id: dataEdit._id,
        title: dataEdit.title,
        image: dataEdit.image,
        description: dataEdit.description,
        tag: dataEdit.tag,
        link: dataEdit.link,
        type: dataEdit.type,
      });
    }
  }, [type]);

  const handleSubmit = async () => {
    try {
      console.log(data);
      const postData = await fetch("http://localhost:3000/api/admin/article", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      setRefresh(true);
    } catch (error) {
      throw error;
    }
  };
  const handleEdit = async () => {
    try {
      const postData = await fetch("http://localhost:3000/api/admin/article", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(data),
      });
      setRefresh(true);
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
        <CModalTitle>Create Oli</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          <>
            <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlInput1">title</CFormLabel>
              <CFormInput
                type="text"
                id="title"
                value={data.title}
                placeholder="title"
                onChange={(e) =>
                  setdata({
                    ...data,
                    title: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlInput1">
                Image 1
              </CFormLabel>
              <CFormInput
                type="text"
                id="image"
                value={data.image1}
                placeholder="link image 1"
                onChange={(e) =>
                  setdata({
                    ...data,
                    image1: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlInput1">
                Image 2
              </CFormLabel>
              <CFormInput
                type="text"
                id="image"
                value={data.image2}
                placeholder="link image 2"
                onChange={(e) =>
                  setdata({
                    ...data,
                    image2: e.target.value,
                  })
                }
              />
            </div>{" "}
            <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlInput1">
                Image 3
              </CFormLabel>
              <CFormInput
                type="text"
                id="image"
                value={data.image3}
                placeholder="link image 3"
                onChange={(e) =>
                  setdata({
                    ...data,
                    image3: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlInput1">Harga</CFormLabel>
              <CFormInput
                type="text"
                value={data.price}
                id="tag"
                placeholder="Harga Product"
                onChange={(e) =>
                  setdata({
                    ...data,
                    price: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlInput1">Promo</CFormLabel>
              <CFormInput
                type="text"
                value={data.promo}
                id="tag"
                placeholder="Promo Product Dalam Persen, Contoh: 10%"
                onChange={(e) =>
                  setdata({
                    ...data,
                    promo: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlTextarea1">
                Description
              </CFormLabel>
              <CFormTextarea
                id="exampleFormControlTextarea1"
                rows="3"
                value={data.description}
                onChange={(e) =>
                  setdata({
                    ...data,
                    description: e.target.value,
                  })
                }
              ></CFormTextarea>
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

const TableTrue = () => {
  // const filterArray = state.data.article.filter((item) => item.type === type);

  return (
    <CTable color="dark" striped>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">#</CTableHeaderCell>
          <CTableHeaderCell scope="col">Judul</CTableHeaderCell>
          <CTableHeaderCell scope="col">Tag</CTableHeaderCell>
          <CTableHeaderCell scope="col" className={"text-center"}>
            Aksi
          </CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <>
          <CTableRow>
            <CTableDataCell scope={"row"}>{1}</CTableDataCell>
            <CTableDataCell>{"example"}</CTableDataCell>
            <CTableDataCell>{"example"}</CTableDataCell>
            <CTableDataCell className={"text-center"}>
              <CButton color="primary" onClick={(e) => editFuntion(e, article)}>
                Edit
              </CButton>
              <CButton
                color="danger"
                onClick={(e) => deleteFunction(e, article)}
              >
                Delete
              </CButton>
            </CTableDataCell>
          </CTableRow>
        </>
      </CTableBody>
    </CTable>
  );
};

const createoli = () => {
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
      const postData = await fetch("http://localhost:3000/api/admin/article");
      const res = await postData.json();
      dispatch({
        type: "SET_ARTICLE",
        article: [...res],
      });
    } catch (error) {
      throw error;
    }
  };
  const deleteArticle = async (e, article) => {
    try {
      const postData = await fetch(`http://localhost:3000/api/admin/article`, {
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
      //   state={state}
      //   type={true}
      //   deleteFunction={deleteArticle}
      //   getdata={getData}
      //   editFuntion={edit}
      />

      <Modal
        visible={showModal}
        setVisible={setshowModal}
        type={type}
        dataEdit={data}
        setRefresh={setrefresh}
      />
    </>
  );
};
export default createoli;
