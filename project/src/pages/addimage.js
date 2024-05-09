function Adding() {
    return ( 
        <>
    <h1 style={{marginLeft:500}}>Share your pictures</h1>
        <form style={{display:"block"}} >
  <input type="text" placeholder="Name"  />
  <input type="file" placeholder="Image"style={{marginLeft:150}} />
  <input type="submit" defaultValue="Subscribe" style={{marginLeft:110}}/>
</form>
</>
     );
}

export default Adding;