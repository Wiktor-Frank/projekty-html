
    

    function alert(){
        alert("Witaj na oficjalnej stornie, o standardach internetowych. W tym HTML 4.01, CSS oraz JS.");
    }

    function Sprawdzanie_maila(){
        try{
            var email = document.getElementById("mail").value;
            var wzorzec = /^[@]+@[^@]+\.[a-z]{2,}$/i;
        
        if(!wzorzec.test(email)){
            throw new Error("Nieprawidłowy adres email!");
        }
        alert("adres e-mail jest poprawny: " + email);
    }
    catch (blad){
        alert("Błąd: " + blad.message);
    }
}