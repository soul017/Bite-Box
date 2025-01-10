import useOnlinestatus from "../utils/useOnlinestatus";

const Contact = () => {
//  for online offline status
  const onlinestatus = useOnlinestatus();
    if (onlinestatus === false)
      return <h1>Looks Like You Are Offline, Check Your Internet Connection</h1>;
 
 
    return (
    <div>
      <h1>Contact US</h1>
      <p>Hey contact us from the email and contact provided:</p>
    </div>
  );
};
export default Contact;
