const Mensaje = (params) => {
    console.log(params)
    //<!-- .mesage es lo que asignamos en main -->
    return <h1 style={{color: params.kolor}}>{params.message}</h1>
  }

export default Mensaje