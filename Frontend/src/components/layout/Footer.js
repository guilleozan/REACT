 import '../../styles/footer.css'



import React from 'react';
const Footer =(props) => {
    return( 
	<section>
         <div className="contenedor-footer">

		 <div><button className="btn btn-lg" >  <i class="bi bi-facebook" ></i> </button></div>

        <div><button className="btn btn-lg"><i className="bi bi-instagram" ></i></button></div>

        <div><button class="btn btn-lg"><i  className="bi bi-twitter" ></i></button></div>
       
        <div><button className="btn btn-lg"><i className="bi bi-envelope"></i> </button></div>

        {/* intente poner los encaces para que se redirijan a las paginas correspondientes
        pero las redireccionaba con la siguiente url (localhost:3001 http:www.fb.com ) y asi con cada una
        de los botones.
         */}
		 	
		</div>
			<div className="derechos">
				<p> Diplo UTN por Guillermo Ozan</p>
			</div>
	</section>	
    );
}

export default Footer;