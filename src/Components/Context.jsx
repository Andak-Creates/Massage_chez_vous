import { createContext, useContext, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isAsideOpen, setAside] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [massage, setMassage] = useState();
  const [linkId, setLinkId] = useState(1);

  // Testimonial usestates
  const [myThoughts, setThoughts] = useState();
  const [myName, setMyName] = useState();
  const [testimonial, setTestimonial] = useState([]);

  return (
    <MyContext.Provider
      value={{
        linkId,
        setLinkId,
        isAsideOpen,
        setAside,
        massage,
        setMassage,
        phone,
        setPhone,
        name,
        setName,
        email,
        setEmail,
        myThoughts,
        setThoughts,
        testimonial,
        setTestimonial,

        myName,
        setMyName,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
