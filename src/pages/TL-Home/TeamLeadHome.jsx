


const TeamLeadHome = () => {
 
 
  const name = localStorage.getItem('userName');



  return (
    <div>
       <div className="flex flex-col h-screen justify-between">
    {/* <Navbar isLoggedIn={isLoggedIn} />  */}
    <div className="flex justify-center items-end mt-20 pb-10"> 
      <div>
        <h3 className="text-center text-3xl font-medium leading-tight text-primary">Welcome, {name}</h3>
      </div>
    </div>

  
  </div>
    </div>
  )
}

export default TeamLeadHome
