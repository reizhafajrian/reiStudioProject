import {
  CButton,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
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
    image_1: "",
    image_2: "",
    image_3: "",
    desc: "",
    price: "",
    promo: "",
    stock: 9999,
    price_servis: 0,
    // mekanik: "",
    product: [
      {
        name: "",
        id: "",
      },
    ],
    tag: "service",
  });
  const [dataProduct, setdataProduct] = useState([]);
  const getData = () => {
    fetch("http://localhost:3000/api/admin/product?ex=service")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // setdata(res.data);

        setdataProduct(res.data);
      });
  };

  useEffect(() => {
    getData();
    if (type === "edit") {
      setdata({
        id: dataEdit._id,
        name: dataEdit.name,
        // mekanik: dataEdit.mekanik,
        image_1: dataEdit.image_1,
        image_2: dataEdit.image_2,
        image_3: dataEdit.image_3,
        price_servis: dataEdit.price_servis,
        price: dataEdit.price,
        desc: dataEdit.desc,
        tag: dataEdit.tag,
        link: dataEdit.link,
        promo: dataEdit.promo,
        type: dataEdit.type,
        stock: dataEdit.stock,
        tag: dataEdit.tag,
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
        body: JSON.stringify({
          data: {
            ...data,
            price:
              Number(data.price_servis) +
              Number(data.price) +
              Number(
                data.product.reduce((a, b) => a + (b.price * b.value || 0), 0)
              ),
            product_addtional: data.product.map((item) => {
              return item.id;
            }),
          },
        }),
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
      const postData = await fetch("http://localhost:3000/api/admin/product", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({ data: data }),
      });
      setRefresh(!isRefresh);
      console.log(data);
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
  const mekanik = useSelector((state) => state.mekanik);
  const [datamekanik, setdatamekanik] = useState([]);
  const getMekanik = () => {
    fetch("http://localhost:3000/api/admin/mekanik")
      .then((res) => res.json())
      .then((res) => {
        setdatamekanik(res.data);
      });
  };
  useEffect(() => {
    getMekanik();
  }, []);
  const addProduct = () => {
    setdata({
      ...data,
      product: data.product.concat({
        name: "",
        id: "",
      }),
    });
  };

  return (
    <CModal visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle>Create Service</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          <>
            <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlInput1">nama service</CFormLabel>
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
                Image 1
              </CFormLabel>
              <CFormInput
                type="text"
                id="image"
                value={data.image_1}
                placeholder="link image 1"
                onChange={(e) =>
                  setdata({
                    ...data,
                    image_1: e.target.value,
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
                value={data.image_2}
                placeholder="link image 2"
                onChange={(e) =>
                  setdata({
                    ...data,
                    image_2: e.target.value,
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
                value={data.image_3}
                placeholder="link image 3"
                onChange={(e) =>
                  setdata({
                    ...data,
                    image_3: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-3">
              {type !== "edit" && (
                <CFormLabel htmlFor="exampleFormControlInput1">
                  Add Product
                </CFormLabel>
              )}
              {type !== "edit" &&
                data.product.map((item, index) => {
                  return (
                    <div className="d-flex flex-row">
                      <CFormSelect
                        className="mb-3"
                        aria-label="Default select example"
                        onChange={(e) => {
                          const temp = data.product;
                          temp[index] = JSON.parse(e.target.value);
                          setdata({
                            ...data,
                            product: temp,
                          });
                        }}
                      >
                        <option value="" selected disabled hidden>
                          Choose here
                        </option>
                        {dataProduct.map((item) => {
                          return (
                            <>
                              <option
                                value={JSON.stringify({
                                  id: item._id,
                                  name: item.name,
                                  price: item.price,
                                  stock: item.stock,
                                })}
                              >
                                {item.name}
                              </option>
                            </>
                          );
                        })}
                      </CFormSelect>
                      <CInputGroup className="mb-3" style={{ width: 200 }}>
                        <CButton
                          onClick={(e) => {
                            const temp = data.product;
                            if (
                              typeof temp[index].value !== "undefined" &&
                              temp[index].value > 0
                            ) {
                              temp[index] = {
                                ...temp[index],
                                value:
                                  typeof temp[index].value !== "undefined"
                                    ? temp[index].value - 1
                                    : 1,
                              };

                              setdata({
                                ...data,
                                product: temp,
                              });
                            }
                          }}
                        >
                          -
                        </CButton>
                        <CFormInput
                          // placeholder="0"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          value={
                            typeof data.product[index].value !== "undefined"
                              ? data.product[index].value
                              : 0
                          }
                          disabled
                        />
                        <CButton
                          color="success"
                          onClick={(e) => {
                            const temp = data.product;

                            if (typeof temp[index].value !== "undefined") {
                              if (temp[index].stock > temp[index].value) {
                                temp[index] = {
                                  ...temp[index],
                                  value: temp[index].value + 1,
                                };
                                setdata({
                                  ...data,
                                  product: temp,
                                });
                              }
                            } else {
                              if (temp[index].name !== "") {
                                temp[index] = {
                                  ...temp[index],
                                  value: 1,
                                };
                                setdata({
                                  ...data,
                                  product: temp,
                                });
                              }
                            }
                          }}
                        >
                          +
                        </CButton>
                      </CInputGroup>
                    </div>
                  );
                })}

              {type !== "edit" && (
                <CButton color="secondary" onClick={() => addProduct()}>
                  Add
                </CButton>
              )}
            </div>
            {type !== "edit" && (
              <>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">
                    Harga Product
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    value={
                      data.price +
                      data.product.reduce(
                        (a, b) => a + (b.price * b.value || 0),
                        0
                      )
                    }
                    id="tag"
                    placeholder="Harga Product"
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">
                    Harga Servis
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    value={data.price_servis}
                    id="tag"
                    placeholder="Harga Product"
                    onChange={(e) =>
                      setdata({
                        ...data,
                        price_servis: Number(e.target.value),
                      })
                    }
                  />
                </div>{" "}
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">
                    Harga Total
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    value={
                      Number(data.price_servis) +
                      Number(data.price) +
                      Number(
                        data.product.reduce(
                          (a, b) => a + (b.price * b.value || 0),
                          0
                        )
                      )
                    }
                    id="tag"
                    placeholder="Harga Product"
                    disabled
                  />
                </div>
              </>
            )}
            {/* <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlInput1">Stock</CFormLabel>
              <CFormInput
                type="text"
                value={data.stock}
                id="tag"
                placeholder="Stock Servis"
                onChange={(e) =>
                  setdata({
                    ...data,
                    stock: e.target.value,
                  })
                }
              />
            </div> */}
            {/* <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlInput1">
                Pilih Mekanik
              </CFormLabel>
              <CFormSelect
                aria-label="Default select example"
                onChange={(e) => {
                  setdata({
                    ...data,
                    mekanik: e.target.value,
                  });
                }}
              >
                {datamekanik.map((item) => {
                  return (
                    <option
                      value={item._id}
                      selected={item._id === data.mekanik}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </CFormSelect>
            </div> */}
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
                value={data.desc}
                onChange={(e) =>
                  setdata({
                    ...data,
                    desc: e.target.value,
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

const TableTrue = ({ state, type, deleteFunction, getdata, editFuntion }) => {
  const data = useSelector((state) => state.dataProduct);

  return (
    <CTable color="dark" striped>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">#</CTableHeaderCell>
          <CTableHeaderCell scope="col">id service</CTableHeaderCell>
          <CTableHeaderCell scope="col">nama servis</CTableHeaderCell>
          <CTableHeaderCell scope="col">stock</CTableHeaderCell>
          <CTableHeaderCell scope="col">promo</CTableHeaderCell>
          <CTableHeaderCell scope="col">price</CTableHeaderCell>
          <CTableHeaderCell scope="col">tag</CTableHeaderCell>
          <CTableHeaderCell scope="col">desc</CTableHeaderCell>
          <CTableHeaderCell scope="col">list mekanik</CTableHeaderCell>
          {/* <CTableHeaderCell scope="col">list-mekanik</CTableHeaderCell> */}
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
                  <CTableDataCell>{item._id}</CTableDataCell>
                  <CTableDataCell>{item.name}</CTableDataCell>
                  <CTableDataCell>{item.stock}</CTableDataCell>
                  <CTableDataCell>{item.promo}</CTableDataCell>
                  <CTableDataCell>{item.price}</CTableDataCell>
                  <CTableDataCell>{item.tag}</CTableDataCell>
                  <CTableDataCell>{item.desc}</CTableDataCell>
                  <CTableDataCell>
                    {item.list_mekanik.map((res) => res.name + ",")}
                  </CTableDataCell>

                  {/* <CTableDataCell>{item.list_mekanik.map((item,index)=>{
                    return ()
                  })}</CTableDataCell> */}
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
      const postData = await fetch(
        "http://localhost:3000/api/admin/product?search=service"
      );

      const res = await postData.json();
      dispatch({
        type: "SET_PRODUCT",
        product: [...res.data],
        temp: [...res.data],
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
