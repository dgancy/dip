import React from "react";
import { Button } from "react-bootstrap";

function szamol(){
  var a = document.getElementById("AA").value;
  var b = document.getElementById("BB").value;
  var n = document.getElementById("NN").value;
  document.getElementById("aa").innerHTML = a;
  document.getElementById("aa1").innerHTML = a;
  document.getElementById("bb").innerHTML = b;
  document.getElementById("bb1").innerHTML = b;
  document.getElementById("nn").innerHTML = n;
  document.getElementById("nn1").innerHTML = n;
  document.getElementById("nn2").innerHTML = n;
  
  let nlog =(Math.log(a)/Math.log(b)).toFixed(3);
  let e=0;
  if(nlog<1)
    {
    e=1-nlog;
    } else {
    e=nlog-1;
  }

  document.getElementById("log").innerHTML = nlog;
  document.getElementById("log2").innerHTML = nlog;

  if(a>=1 && b>1)
  {
    var eset;
    if(nlog==0)
    {
      eset=2;    
    }
    if(nlog>1 && (nlog-e)==1 && n=="n" || nlog>2 && n=="n2")
    {
      eset=1;    
      document.getElementById("seged2").innerHTML = e.toFixed(3);
      document.getElementById("seged1").innerHTML = e.toFixed(3);
      document.getElementById("seged").innerHTML = e.toFixed(3); 
    }
    if(nlog>2 && n=="n2")
    { 
      e-=1;
      document.getElementById("seged2").innerHTML = e.toFixed(3);
      document.getElementById("seged1").innerHTML = e.toFixed(3);
      document.getElementById("seged").innerHTML = e.toFixed(3);
    }

//a nlogn esetet nem tudom hogyan még

    if(nlog<1 && (nlog+e)==1 && n=="n" && nlog<2 && n=="n2")
    {
      eset=3;     
      document.getElementById("seged2").innerHTML = e.toFixed(3);
      document.getElementById("seged1").innerHTML = e.toFixed(3);
      document.getElementById("seged").innerHTML = e.toFixed(3); 
    }
    if(nlog<2 && n=="n2")
    { 
      e+=1;
      document.getElementById("seged2").innerHTML = e.toFixed(3);
      document.getElementById("seged1").innerHTML = e.toFixed(3);
      document.getElementById("seged").innerHTML = e.toFixed(3);
    }
    document.getElementById("eset").innerHTML = eset;
  }

  var muvelet;
  if(eset==1 || eset==2)
  {
    muvelet="-";
    document.getElementById("muvelet").innerHTML = muvelet;
    document.getElementById("muvelet1").innerHTML = muvelet;
    document.getElementById("muvelet2").innerHTML = muvelet;

    document.getElementById("eredmeny").innerHTML = (nlog-e.toFixed(3)).toFixed(3);
  } else {
    muvelet="+";
    document.getElementById("muvelet").innerHTML = muvelet;
    document.getElementById("muvelet1").innerHTML = muvelet;
    document.getElementById("muvelet2").innerHTML = muvelet;
    document.getElementById("eredmeny").innerHTML = (nlog+e.toFixed(3)).toFixed(3);
  }
}

function show()
{
  var x=document.getElementById("show");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function Mester() {
 

  return (
    <form >
      <h1 className="test">Mestertétel</h1>
      <div className="mesterform">
      <a>a :   </a><input type="text" id="AA" className="mesterinput1"></input><br/>
      <a>b :   </a><input type="text" id="BB" className="mesterinput1"></input>
      <Button onClick={szamol} className="mesterbtn">Megold</Button><br/>
      <a>f(n) : </a><input type="text" id="NN" className="mesterinput2"></input><br/><br/>
      </div>
      <br/>
      <br/>
      <div>
        <a>a = T elem szorzata</a>
        <a>b = a zárójeles n elem szorzata</a>
        <a>f = a + jel utáni érték</a>
      </div>
      <div className="adminsight" id="show">
        <p>
          <a>a= </a><a id="aa" className="mestera"></a>
          <a> b= </a><a id="bb" className="mestera"></a>
          <a> f(n)= </a><a id="nn" className="mestera"></a>
          <br/>
          <br/>
          <a>
            nlogˇb a =
             <a id="log1"/>
          </a>
          <a> O(n^ 
            <a id="log"/>)
          </a>
          
        </p>
        <a>Eset: <a id="eset"  /></a >
        <a> E= </a><a id="seged"/>
        <br/>
        <a>Képlet: </a><a id="nn1"/>
        <a> = O(nlogˇb a<a id="muvelet1"/>E) = O(nlogˇ<a id="bb1"/> <a id="aa1"/><a id="muvelet2"/><a id="seged1"/>)</a>
        <br/>
        <a> = O(n^<a id="log2"/><a id="muvelet"/><a id="seged2"/>)=O(n^<a id="eredmeny"/>)</a>
        <br/>
        <a>Eredmény: T(n)= O(<a id="nn2"/>)</a>
      </div>
    </form>
  );
}

export default Mester;
