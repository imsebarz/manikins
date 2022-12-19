import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { confirmUser } from "../../context/user/Actions";
import "./confirmation.scss";



const ConfirmationStatus = {
  Pending : "pending",
  Confirmed : "confirmed",
  Error : "error",
}

const Confirmation = () => {
  const [status, setStatus] = useState(ConfirmationStatus.Pending);
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const code = searchParams.get("code");

  useEffect(() => {
    handleConfirmation();
    //check that both id and code are passed as query params, if not then navigate to landing page
    if (!code || !id) {
      navigate("/")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleConfirmation = async (id, code) => {
    try {
      const success = await confirmUser({ id, code });
      setStatus(success ? ConfirmationStatus.Confirmed : ConfirmationStatus.Error);
    } catch (error) {
      console.error(error);
      setStatus(ConfirmationStatus.Error);
    }
  };

   return (
    <div className="confirmation">
      {status === ConfirmationStatus.Pending && (
          <h1>Loading...</h1>
      )}
       {status === ConfirmationStatus.Confirmed && (
         <>
          <h1>Congratulations!</h1>
          <p>You have successfully confirmed your email!</p>
         </>
      )}
       {status === ConfirmationStatus.Error && (
         <>
          <h1>Oops!</h1>
          <p>We have an error</p>
         </>
      )}
    </div>
  );
};

export default Confirmation;
