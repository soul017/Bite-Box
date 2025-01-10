import useOnlinestatus from "../utils/useOnlinestatus";

const Grocery=()=>{
// for online offline status
    const onlinestatus = useOnlinestatus();
    if (onlinestatus === false)
      return <h1>Looks Like You Are Offline, Check Your Internet Connection</h1>;

    return(
    <h1>Another big app having separate build</h1>);
};
export default Grocery;