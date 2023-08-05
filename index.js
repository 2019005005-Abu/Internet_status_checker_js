window.addEventListener('load',chekInternetConnection);
function chekInternetConnection(){
  let connectionStattusText=document.getElementById('statusText');
   let IPAddress=document.getElementById('ipaddress');
   let ipaddressStength=document.getElementById('ipaddressStength');
   connectionStattusText.textContent="Checking ..."
   if(navigator.onLine){
      fetch(`'https://api.ipify.org?format=json`)
      .then((response)=>response.json())
      .then((data)=>{
        IPAddress.textContent=data.ip;
        connectionStattusText.textContent="Connected";
        const connection=navigator.connection;
        const networkiStength=connection ?connection.downlink
        +'Mbps' :'Unknown';
       ipaddressStength.textContent =networkiStength
      }).catch(()=>{
        connectionStattusText.textContent="Disconnceted"
        IPAddress.textContent='-';
        ipaddressStength.textContent='-'
      })
      

   }else{
    connectionStattusText.textContent="Disconnceted"
    IPAddress.textContent='-';
    ipaddressStength.textContent='-'
   }
}
chekInternetConnection();