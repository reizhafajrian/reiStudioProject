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
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdown,
} from "@coreui/react";
import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Get, Put } from "../../../../utils/api";

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
    no_resi: "",
  });

  useEffect(() => {
    if (type === "edit") {
      setdata({
        name: dataEdit.jenis_pengiriman,
        no_resi: dataEdit.no_resi,
      });
    }
  }, [type]);

  const handleSubmit = async () => {
    try {
      fetch("http://localhost:3000/api/admin/product", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ data: data }),
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
      Put("/admin/transaksi/", {
        data: {
          ...dataEdit,
          jenis_pengiriman: data.name,
          no_resi: data.no_resi,
        },
      });
      setRefresh(!isRefresh);
      console.log(isRefresh);
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
              <CFormLabel htmlFor="exampleFormControlInput1">
                Nama Jasa Pengiriman
              </CFormLabel>
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
              <CFormLabel htmlFor="exampleFormControlInput1">
                Nomor Resi
              </CFormLabel>
              <CFormInput
                type="text"
                id="image"
                value={data.no_resi}
                placeholder="link image 1"
                onChange={(e) =>
                  setdata({
                    ...data,
                    no_resi: e.target.value,
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

const TableTrue = ({
  state,
  type,
  deleteFunction,
  getdata,
  editFuntion,
  refresh,
  setRefresh,
}) => {
  const data = useSelector((state) => state.transaksi);

  const setResi = (item, string) => {
    Put("/admin/transaksi/", {
      data: {
        ...item,
        status: string,
      },
    });
    window.location.reload();
  };
  useEffect(() => {
    console.log(data, "ini data");
  }, [data]);

  return (
    <CTable color="dark" striped>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">#</CTableHeaderCell>
          <CTableHeaderCell scope="col">name</CTableHeaderCell>
          <CTableHeaderCell scope="col">stock</CTableHeaderCell>
          <CTableHeaderCell scope="col">promo</CTableHeaderCell>
          <CTableHeaderCell scope="col">price</CTableHeaderCell>
          <CTableHeaderCell scope="col">tag</CTableHeaderCell>
          <CTableHeaderCell scope="col">desc</CTableHeaderCell>
          <CTableHeaderCell scope="col">status</CTableHeaderCell>
          <CTableHeaderCell scope="col">resi</CTableHeaderCell>

          {/* <CTableHeaderCell scope="col" className={"text-center"}>
            Aksi
          </CTableHeaderCell> */}
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <>
          {data.map((item2, index2) => {
            return item2.order.map((item, index) => {
              return (
                <>
                  <CTableRow key={item.order_id}>
                    <CTableDataCell scope={"row"}>{++index}</CTableDataCell>
                    <CTableDataCell>{item.data.name}</CTableDataCell>
                    <CTableDataCell>{item.data.stock}</CTableDataCell>
                    <CTableDataCell>{item.data.promo}</CTableDataCell>
                    <CTableDataCell>{item.data.price}</CTableDataCell>
                    <CTableDataCell>{item.data.tag}</CTableDataCell>
                    <CTableDataCell>{item.data.desc}</CTableDataCell>
                    <CTableDataCell>
                      <CDropdown>
                        <CDropdownToggle color="secondary">
                          {typeof item.status === "string"
                            ? item.status
                            : "Status Belum DiPilih"}
                        </CDropdownToggle>

                        <CDropdownMenu>
                          <CDropdownItem
                            onClick={() => setResi(item, "diproses")}
                          >
                            Di prosess
                          </CDropdownItem>
                          <CDropdownItem
                            onClick={() => setResi(item, "dikirim")}
                          >
                            Dikirim
                          </CDropdownItem>
                          <CDropdownItem
                            onClick={() => setResi(item, "selesai")}
                          >
                            Selesai
                          </CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                    </CTableDataCell>
                    <CTableDataCell className={"text-center"}>
                      <CButton
                        color="primary"
                        onClick={(e) => editFuntion(e, item)}
                      >
                        Tambah Resi
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                </>
              );
            });
          })}
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
      const postData = await Get("/admin/transaksi");

      dispatch({
        type: "SET_TRANSAKSI",
        transaksi: [...postData.data],
      });
    } catch (error) {
      throw error;
    }
  };
  const deleteArticle = async (e, article) => {
    try {
      const postData = await fetch(`http://localhost:3000/api/admin/product`, {
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
      {/* <CButton color="primary" className={"mb-2"} onClick={create}>
        Create New
      </CButton> */}

      <TableTrue
        state={state}
        type={true}
        deleteFunction={deleteArticle}
        getdata={getData}
        editFuntion={edit}
        isRefresh={refresh}
        setRefresh={setrefresh}
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
export default createoli;
