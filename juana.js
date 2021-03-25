(function(){


    console.log("hola")



    //evento listenner 
   /*  let atr =document.querySelector('#btn');
    atr.addEventListener('click', function(){
        alert("En el sistema");

    })
 */

    //
    /* let atr= Document.querySelector('#btn');
    atr.addEventListener('click',saludar);
    function saludar(e){
        alert(e.target);
    } */
        // local  storage.
       /*  localStorage.setItem('nombre','Juana');
        let n=localStorage.getItem('nombre');
        //
        /* localStorage.removeItem ('nombre'); */ 

        //parametro rest

       /* function enviarcarros(...idCarros){
            idCarros.forEach ( id=> console.log(id));
        }
        enviarcarros (100,200,300);*/

        //
      /*  function enviarcarros(dia,...idCarros){
            idCarros.forEach(id=> console.log(id));
        }
        enviarcarros('domingo',100,200,300); */

        // destructuring arrays
        /*let idsCarros = [1,2,3];
        let [car1,car2,car3] =idsCarros;
        console.log(car1,car2,car3);*/

       /*let idsCarros =[1,2,6];
        let car1, carrosF;
        [car1,...carrosF]=idsCarros;
        console.log (car1,carrosF);*/

        /*let idsCarros =[1,2,6];
        let carrosF;
        [,...carrosF] =idsCarros;
        console.log(carrosF);*/

        ////destructuring objects
        /*let carro = {id:20,estilo: 'convertible'};
        let {id,estilo} = carro;
        console.log (id,estilo);*/
        

        /*let  carro = {id:20,estilo: 'convertible'};
        let id,estilo;
        ({id,estilo} = carro); 
        console.log(id,etilo);*/

        /*let carro = {id:20,estilo:'convertible'};
        let id,estilo;
        ({id,estilo} = carro); 
        console.log(id,estilo);*/
        
       ////sintaxis Spread
       
       /*function iniarCarros(car1, car2, car3){
        console.log(car1, car2 ,car3);
       }
        
       
          let idsCarros =[ 100,200,300];
            iniarCarros(...idsCarros);*/


           /* function iniciarCarros(car1,car2,car3){
                console.log(car1,car2, car3);
            }
  
   /* let codigocarros ='a.b,c'
    iniciarCarros(...codigocarros);
*/
    ///IIfe 


        /* console.log('en la funcion');
 */
    


        /*     let app =(function (){
                let carId = 123;
                console.log('En la funcion');
                return;
            })();

 */

// Clousures

/*let app = (function (){
    let carId = 123;
    let getId = function (){
        return carId;
    };
    return {
        getId: getId
    };
} )();
console.log(app.getId());
*/

// this//


/*let fn  = function (){
    console.log(this === window);

};
fn();
*/    


/*let o = {
    CarId: 123,
    getId: function (){
        return this.CarId;


    }
        
    };
    console.log(o.getId());

*/
    // call apply
    let o={
  CarId:123,
  getId:function (){
      return this .CarId;

  }
};
let newcar= {CarId: 456};
console .log(o.getId(). call(newcar)); 

  let o ={
    CarId:123,
    getId:function(prefix){
        return prefix + this.CarId;
    }

    };
    let newcar = {CarId: 456};
    console .log(o.getId().apply(newcar, ['id:']));

    //bin
   /* let o = {
        CarId:123,
        getId:function(){
            return this.CarId;
        }

        };
        */
        let newcar = {CarId: 456};
        let newcar = o.getId.bind (newcar);
        console.log (newcar() );


        //funciones flecha

        let getId= ()=>123,
     console.log (getId() );
    });

        
    