import React, { Component, useState, useForm } from "react";

function App() {
  const [inc, setIncome] = useState({
    name: "",
    amount: "",
  });
  const [
    register,
    watch,
 ] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      name: inc.name,
      amount: inc.amount,
    };
    console.log("Submitted...!");
    console.log(inc);
    console.log(inc.amount);
  };
  const handleChange = (event) => {
    setIncome({
      ...inc,
      [event.target.name]: event.target.inc,
    });
  };

  const tradeType = watch('tradeType')

  return (
    <div class="container-sm container-md container-lg container-xl bg-secondary">
      <div class="text-center">
        <h1>Expense Tracking APP</h1>
      </div>
      <div class="row align-item-center">
        <div class="col-12 col-lg-6">
          <h3>Expense Tracking APP</h3>
          <div class="container container-sm container-md container-lg container-xl bg-secondary">
            <form>
              <div class="row mb-3">
                <label for="inputName1" class="col-sm-4 col-form-label">
                  Title
                </label>
                <div class="col-sm-6">
                  <input
                    type="name"
                    class="form-control"
                    id="inputName1"
                    name="name"
                    placeholder="Type title Name"
                    value={inc.name}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>

              <div class="row mb-3">
                <label for="inputAmount1" class="col-sm-4 col-form-label">
                  Ammount
                </label>
                <div class="col-sm-6">
                  <input
                    type="Number"
                    name="amount"
                    class="form-control"
                    id="inputAmount1"
                    value={inc.amount}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <fieldset class="row mb-3">
                <legend class="col-form-label col-sm-4 pt-0">Type</legend>
                <div class="col-sm-6">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios1"
                      checked
                      value="income"
                      {...register("tradeType", {
                        required: "Trade type is required",
                      })}
                    ></input>
                    <label class="form-check-label" for="gridRadios1">
                      Income
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      value="expense"
                      {...register("tradeType", {
                        required: "Trade type is required",
                      })}
                    ></input>
                    <label class="form-check-label" for="gridRadios2">
                      Expenses
                    </label>
                  </div>
                </div>
              </fieldset>

              <button
                type="submit"
                class=" col-form-label btn-primary col-sm-4  pt-2"
                onClick={handleSubmit}
              >
                Ok
              </button>
            </form>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <h3>Expense Details....</h3>
          <div className="container container-sm container-md container-lg container-xl bg-secondary">
            <legend class="col-form-label col-sm-2 pt-0">Select:</legend>
            <fieldset class="row mb-3">
              <div class="col-sm-10">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                  ></input>
                  <label class="form-check-label" for="gridRadios1">
                    All
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                    checked
                  ></input>
                  <label class="form-check-label" for="gridRadios2">
                    Income
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios3"
                    value="option3"
                  ></input>
                  <label class="form-check-label" for="gridRadios3">
                    Expenses
                  </label>
                </div>
              </div>
            </fieldset>
            <div>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>Type</th>
                </tr>
                <tbody>
                  <tr>
                    <td>{inc.name}</td>
                    <td>{inc.amount}</td>
                    <td>{inc.type}</td>
                  </tr>
                </tbody>
              </thead>
            </table>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
