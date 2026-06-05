function santriCard({nama, nilai, kehadiran}){

    const status = nilai >= 75 && kehadiran >= 85 ?"lulus" : "remedial";

    return(
        <div style={{
            border: "1px solid #ccc",
            pading: "12px",
            margin: "10px",
            borderRadius: "8px",
        }}>

            <h3>{nama}</h3>
            <p>nilai: {nilai}</p>
            <p>kehadiran: {kehadiran}</p>
            <p>status: {status}</p>
        </div>
    )

}

export default santriCard;