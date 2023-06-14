const ListHeader = ({listName})=> {
const signOut = () =>
{
  console.log("temp signout");

}
const addNew = () =>
{
  console.log("temp addnew");

}

    return (
      <div className="ListHeader">
      <h1>{listName}</h1>
      <div className="button-container">
      <button className="create" onClick={addNew}>ADD NEW</button>
      <button className="signout" onClick={signOut}>SIGN OUT</button>
      </div>
      </div>
    );
  }
  
  export default ListHeader;
   