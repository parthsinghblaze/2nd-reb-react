import React, { useEffect, useState } from "react";
import { createProduct, updateProduct } from "../redux/apiProduct";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const initialValues = {
  name: "",
  qty: 0,
  category: "",
  price: 0,
};

function AddProduct() {
  // const [name, setName] = useState("");
  // const [qty, setQty] = useState(0);
  // const [category, setCategory] = useState("");
  // const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [initialFormValue, setInitialFormValue] = useState(initialValues);

  const { id } = useParams();
  const location = useLocation();
  console.log("location", location);
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    category: Yup.string().required("Category is required"),
    qty: Yup.number()
      .min(10, "Qty should be min 10")
      .max(20, "Qty should be max 20")
      .required("Qty is required"),
    price: Yup.number().required("Price is required"),
  });

  useEffect(() => {
    console.log("Component mounted");
    if (id) {
      setInitialFormValue(location.state);
    } else {
      setInitialFormValue(initialValues);
    }
  }, [location]);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   // const formValue = { name, qty, category, price };
  //   // dispatch(createProduct(formValue));
  // }

  function handleSubmit(values) {
    const { name, qty, category, price } = values;
    const formValue = { name, qty, category, price };

    if (id) {
      dispatch(updateProduct({ id, formValue, navigate }));
    } else {
      dispatch(createProduct({ formValue, navigate }));
    }
  }

  return (
    <div className="container moveUpAnimation">
      <h5> {id ? "Edit Product" : "Add Products"} </h5>
      <div className="row">
        <div className="col-md-6 offset-md-3 p-3 shadow my-5">
          {/* FORMIK */}
          <Formik
            initialValues={initialFormValue}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            enableReinitialize={true}
          >
            {() => {
              return (
                <Form>
                  <div className="mb-3">
                    <label>Name</label>
                    <Field type="text" name="name" className="form-control" />
                    <ErrorMessage
                      name="name"
                      className="text-danger"
                      component="div"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Category</label>
                    <Field
                      type="text"
                      name="category"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="category"
                      className="text-danger"
                      component="div"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Qty</label>
                    <Field type="number" name="qty" className="form-control" />
                    <ErrorMessage
                      name="qty"
                      className="text-danger"
                      component="div"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Price</label>
                    <Field
                      type="number"
                      name="price"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="price"
                      className="text-danger"
                      component="div"
                    />
                  </div>
                  {id ? (
                    <button className="btn btn-warning">Update</button>
                  ) : (
                    <button className="btn btn-success">Submit</button>
                  )}
                </Form>
              );
            }}
          </Formik>
          {/* CUSTOM FORM */}
          {/* 
          <form action="">
            <div className="mb-3">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label>Qty</label>
              <input
                type="number"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label>Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label>Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-control"
              />
            </div>
            <button className="btn btn-success" onClick={handleSubmit}>
              Add Product
            </button>
          </form>
          */}
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
