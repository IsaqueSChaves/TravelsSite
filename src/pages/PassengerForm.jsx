import React, { useEffect, useRef } from "react";
import { useForm, useFormState } from "react-hook-form";

function PassengersForm({ assent, index, addData, assents, onSubmit }) {

  const {
    register,
    handleSubmit,
    watch,
    control,
  } = useForm({
    defaultValues: {
      name: "",
      age: "",
      email: "",
    },
  });

  const nameError = useRef(false);
  const ageError = useRef(false);
  const emailError = useRef(false);
  const isValid = useRef(false);

  const { touchedFields } = useFormState({
    control,
  });

  //useEffect to validate error

  useEffect(() => {
    const handleError = watch((data) => {
      if (data.name.length < 2) {
        nameError.current = true;
      } else {
        nameError.current = false;
      }

      if (data.age <= 0 || data.age > 120) {
        ageError.current = true;
      } else {
        ageError.current = false;
      }

      if (!data.email.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) 
      {
        emailError.current = true;
      } else {
        emailError.current = false;
      }
    });

    if(emailError.current && nameError.current && ageError.current){
      isValid.current = true;
    } else{
      isValid.current = false;
    }
    console.log(isValid.current);

    return () => {
      handleError.unsubscribe();
    };
  }, [watch]);

  //useEffect to add data 
  useEffect(() => {
    const subscription = watch((data) => {
      addData(index, data);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  return (
    <div>
      <h3>Passanger {index + 1}</h3>
      <h4>Assent {assent + 1}</h4>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputName4">Name</label>
          <input
            {...register("name", { required: true, minLength: 3 })}
            type="name"
            class="form-control"
            placeholder="Name"
          />
          {touchedFields.name && nameError.current && <p className="error">Invalid input</p>}
        </div>

        <div class="form-group col-md-6">
          <label for="inputAge4">Age</label>
          <input
            type="number"
            {...register("age", { required: true, min: 18, max: 99 })}
            class="form-control"
            placeholder="Age"
          />
          {touchedFields.age && ageError.current && <p  className="error">Invalid age</p>}
        </div>

        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            type="text"
            class="form-control"
            placeholder="example@xyz.com"
          />
          {touchedFields.email && emailError.current && <p className="error">Invalid email</p>}
        </div>
      </div>

      {assents.length === index + 1 ? (
        <button
          type="button"
          disabled={isValid.current}
          onClick={() => handleSubmit(onSubmit)()}
          class="btn btn-primary"
        >
          Submit
        </button>
      ) : null}
    </div>
  );
}

export default PassengersForm;