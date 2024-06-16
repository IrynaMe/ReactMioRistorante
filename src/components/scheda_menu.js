function Scheda_menu(props) {
  let styles = {
    textAlign: "center",
    color: "white",
   // background: "orange",
    fontSize: "12px",
    width: "18rem",
    marginTop: "10%",
    height:"25rem"
  };

  let textStyle = {
    height: "40px"
  };
  let imgStyle={
    height:"200px"
  }

  return (
    <div className='col '>
      <div className="card bg-danger bg-gradient" style={styles}>
        <img src={props.card.image} className="card-img-top" alt="..." style={imgStyle} />
        <div className="card-body">
          <h5 className="card-title">{props.card.name}</h5>
          <p className="card-text" style={textStyle}>{props.card.descr}</p>
         {/*  <button style={{ margin: '10px' }} className="btn btn-dark" onClick={() => props.delete_fun(props.card.id)}>{props.card.testo_btn1}</button> */}
          <button style={{ margin: '10px' }} className="btn btn-light bg-gradient" onClick={() => props.add_ordine(props.card.id)}>{props.card.testo_btn2}</button>
        </div>
      </div>
    </div>
  );
}

export default Scheda_menu;
