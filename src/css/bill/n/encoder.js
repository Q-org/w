/*
***************************copy right of netinnet.cn ***************************
                           ver 20050826
*/
/* ===============javascript?ࣺ????   
   ENCODER ??????(id,name)       ????
   ENCODER2??????(id,name,name2) ????
   ????javascript??Сд???У?ÿ??????????һ?? ȫ??ΪСд???? ͬ?????? ?Լ??ٳ??????? 
*/

/*??ͨ???루id,name?????? ================================================*/
function ENCODER()
{
  this.rowCount = 0;
  this.ids = new Array();
  this.names= new Array();
  
  this.addOneRow2Col = addOneRow2Col;//????һ?м?¼
  this.addonerow2col = addonerow2col;//????һ?м?¼

  this.hasId  = hasId;               //?ж??Ƿ???ID?????з???true????false
  this.hasid  = hasid;               //?ж??Ƿ???ID?????з???true????false
  this.hasName = hasName;
  this.hasname = hasname;
  this.hasIdOrName = hasIdOrName;
  this.hasidorname = hasidorname;
  
  this.returnName = returnName;//????ID????name
  this.returnname = returnname;//????ID????name
  
  this.checkId = checkId;      //?ж????????Ƿ???id??Χ?ڣ??????????????ھ??棬ͬʱ??????????
  this.checkid = checkid;      //?ж????????Ƿ???id??Χ?ڣ??????????????ھ??棬ͬʱ??????????
  this.checkIdAndSetNameField = checkIdAndSetNameField;
  this.checkidandsetnamefield = checkidandsetnamefield;

  this.copyToListBox = copyToListBox;
  this.copytolistbox = copytolistbox;
}

/*??ͨ???루id,name1,name2??????  =======================================
  ??;?? ??ͨ??????Ӧ??
         ??????????????Ӧ?ã?listbox1ѡ??????Ӱ??listbox2?б????ݣ? */
function ENCODER2()
{
  this.rowCount=0;
  this.ids = new Array();
  this.names= new Array();
  this.name2s= new Array();
  this.addOneRow3Col = addOneRow3Col;//????һ?м?¼
  this.addonerow3col = addonerow3col;//????һ?м?¼
  
  this.hasId  = hasId;               //?ж??Ƿ???ID?????з???true????false
  this.hasid  = hasid;               //?ж??Ƿ???ID?????з???true????false
  this.hasName = hasName;
  this.hasname = hasname;
  this.hasIdOrName = hasIdOrName;
  this.hasidorname = hasidorname;

  this.returnName = returnName;  //????ID????name
  this.returnname = returnname;//????ID????name
  this.returnName2 = returnName2;//????ID????name2 ??????Ϊ ENCODER2 ????
  this.returnname2 = returnname2;//????ID????name2 ??????Ϊ ENCODER2 ????
  
  this.checkId = checkId;        //?ж????????Ƿ???id??Χ?ڣ??????????????ھ??棬ͬʱ??????????
  this.checkid = checkid;      //?ж????????Ƿ???id??Χ?ڣ??????????????ھ??棬ͬʱ??????????
  this.checkIdAndSetNameField = checkIdAndSetNameField;
  this.checkidandsetnamefield = checkidandsetnamefield;
  this.checkIdAndSet2NameField = checkIdAndSet2NameField;/*??????Ϊ ENCODER2 ????*/
  this.checkidandset2namefield = checkidandset2namefield;

  this.filterAndRefreshListBox = filterAndRefreshListBox;/*??????Ϊ ENCODER2 ????*/
  this.filterandrefreshlistbox = filterandrefreshlistbox;/*??????Ϊ ENCODER2 ????*/

  this.copyToListBox  =  copyToListBox; 
  this.copytolistbox = copytolistbox;
}


/*
  ????һ?б?????¼(id,name) ------------------------------------------------------------
  Ӧ???? ENCODER ?? ???Ӽ?¼ 
*/
function addOneRow2Col(arg_id,arg_name)
{ //test
  this.ids[this.rowCount] = arg_id;
  this.names[this.rowCount] = arg_name;
  this.rowCount++;
  return true;
}
function addonerow2col(arg_id,arg_name)
{ return this.addOneRow2Col(arg_id,arg_name);}

/*
  ????һ?б?????¼(id,name1,name2) ----------------------------------------------------
  Ӧ???? ENCODER2 ??  ???Ӽ?¼ 
  */
function addOneRow3Col(arg_id,arg_name1,arg_name2)
{ //test
  this.ids[this.rowCount] = arg_id;
  this.names[this.rowCount] = arg_name1;
  this.name2s[this.rowCount] = arg_name2;
  this.rowCount++;
  return true;
}
function addonerow3col(arg_id,arg_name1,arg_name2)
{return this.addOneRow3Col(arg_id,arg_name1,arg_name2);}


/*
  ?ж??Ƿ????? ĳ??IDֵ?ļ?¼?????з???true ????????false ------------------------------
  ??Ӧ???ڣ?ENCODER , ENCODER2 ???? 
*/
function hasId(arg_idValue)
{ //test
  for(var i=0;i<this.rowCount;i++)
      if (arg_idValue==this.ids[i]) return true;
  return false;
}
function hasid(arg_idValue)
{  return this.hasId(arg_idValue); }

/*
  ?ж??Ƿ????? ĳ??Name ֵ?ļ?¼?????з???true ????????false----------------------------- 
  ??Ӧ???ڣ?ENCODER , ENCODER2 ???? 
*/
function hasName(arg_nameValue)
{ //test 
  for(var i=0;i<this.rowCount;i++)
      if (arg_nameValue==this.names[i]) return true;
  return false;
}
function hasname(arg_nameValue)
{ return this.hasName(arg_nameValue);}

/*
  ?ж? ????ֵ ?Ƿ? ??????ID ?б? ?? NAME?б???    -------------------------------------
  ??Ӧ???ڣ?ENCODER , ENCODER2 ???? 
*/
function hasIdOrName(arg_Value)
{ //test
  if (this.hasId(arg_Value)==true) return true;
  if (this.hasName(arg_Value)==true) return true;
  return false;
}
function hasidorname(arg_Value)
{return  this.hasIdOrName(arg_Value);}


/*
  ????IDֵ???? nameֵ ?? ????û???ҵ???Ӧ??id,?? ???? "" ------------------------------
  ??Ӧ???ڣ?ENCODER , ENCODER2 ???? 
*/
function returnName(arg_idValue)
{//test
  for(var i=0;i<this.rowCount;i++)
    if (arg_idValue==this.ids[i]) return this.names[i];
  return "";
}
function returnname(arg_idValue)
{return this.returnName(arg_idValue);}

/*
  ????IDֵ???? name2 ֵ ?? ????û???ҵ???Ӧ??id,?? ???? "" ---------------encoder2---------
  ֻӦ???? ENCODER2 
*/
function returnName2(arg_idValue)
{//test
  for(var i=0;i<this.rowCount;i++)
    if (arg_idValue==this.ids[i]) return this.name2s[i];
  return "";
}
function returnname2(arg_idValue)
{return this.returnName2(arg_idValue);}


/*
  ????ID????????????ֵ?Ƿ??? ID ?б??? ---------------------------------------------------
  ???У???????true
  ???ޣ?????????????Ϣ?????? false 
  Ӧ??ʾ???? 
  ??Ӧ???ڣ?ENCODER , ENCODER2 ???? 
Ӧ??ʾ????
<SCRIPT LANGUAGE="JavaScript">
function check()
{
  var a = new ENCODER(3);
  a.addOneRow(1,'aa');
  a.addOneRow(2,'bb');
  a.addOneRow(3,'cc');
  return a.checkId(form1.b,"input error");
}
</SCRIP>

<input type="text" name="b"  onchange="return check();" />
???֣?????????b??????ֵ????1,2,3??Χ??ʱ????????input error???ڣ?ͬʱ???????? b?? ֱ????????ȷֵΪֹ,
     ?ɰ?ctrl-z??ʹb???ص?ǰһ??????ֵ

*/
function checkId(obj_inputIdField,arg_errorMsg)
{
  if (this.hasId(obj_inputIdField.value)) return true;
  else { alert(arg_errorMsg); return false; }
}
function checkid(obj_inputIdField,arg_errorMsg)
{return  this.checkId(obj_inputIdField,arg_errorMsg);}



/*????ID????????????ֵ?Ƿ??? ID ?б??? ----------------------------------------------------
  ???У???ͬʱ??????Ӧ??name????????ֵ?? ????true
  ???ޣ?????????????Ϣ?????? false 
  ??Ӧ???ڣ?ENCODER , ENCODER2 ???? 

Ӧ??ʾ????
<SCRIPT LANGUAGE="JavaScript">
function check()
{
  var a = new ENCODER(3);
  a.addOneRow(1,'aa');
  a.addOneRow(2,'bb');
  a.addOneRow(3,'cc');
  //alert( a.returnName(2));
  //if (a.hasIdOrName('1')) alert("hasIdOrName");
  return a.checkIdAndSetNameField(form1.b,form1.c,"input error");
}
</SCRIPT>

        <input type="text" name="b"  onchange="return check();" />
???֣???b??????1ʱ??c??ֵ?Զ??ó?'aa';??????4ʱ??????input error???ڣ?ͬʱ????????b????
     ?ɰ?ctrl-z??ʹb???ص?ǰһ??????ֵ
*/
function checkIdAndSetNameField(obj_inputIdField,obj_inputNameField,arg_errorMsg)
{
  if (this.hasId(obj_inputIdField.value)) 
  {
     obj_inputNameField.value  = this.returnName(obj_inputIdField.value);
     return true;
  }
  else 
  { 
      alert(arg_errorMsg); 
      return false; 
  }
}
function checkidandsetnamefield(obj_inputIdField,obj_inputNameField,arg_errorMsg)
{return this.checkIdAndSetNameField(obj_inputIdField,obj_inputNameField,arg_errorMsg);}

/*------------------------------------------------------------------ENCODER2 --------------------------
  ????ID????????????ֵ?Ƿ??? ID ?б??? 
  ???У???ͬʱ??????Ӧ??name????????ֵ?? ????true
  ???ޣ?????????????Ϣ?????? false 
  Ӧ??ʾ????
<SCRIPT LANGUAGE="JavaScript">
{
  var A = new ENCODER2(3);
  a.addOneRow(1,'aa','aaaaaaaaaaaaaa');
  a.addOneRow(2,'bb','bbbbbbbbbbbbbb');
  a.addOneRow(3,'cc','cccccccccccccc');
}
</SCRIPT>
</head>
 <input type="text" name="b"  onchange="javascript:A.checkIdAndSetNameField(form1.b,form1.c,form1.d, 'input error');" />

???֣???b??????1ʱ??c??ֵ?Զ??ó?'aa';d???Զ??ó?'aaaaaaaaaaaaaaaa';??????4ʱ??????input error???ڣ?ͬʱ????????b????
     ?ɰ?ctrl-z??ʹb???ص?ǰһ??????ֵ
*/
function checkIdAndSet2NameField(obj_inputIdField,obj_inputName1Field,obj_inputName2Field,arg_errorMsg)
{
  if (this.hasId(obj_inputIdField.value)) 
  {
     obj_inputName1Field.value  = this.returnName1(obj_inputIdField.value);
     obj_inputName2Field.value  = this.returnName2(obj_inputIdField.value);
     return true;
  }
  else 
  { 
      alert(arg_errorMsg); 
      return false; 
  }
}
function checkidandset2namefield(obj_inputIdField,obj_inputName1Field,obj_inputName2Field,arg_errorMsg)
{ return this.checkIdAndSet2NameField(obj_inputIdField,obj_inputName1Field,obj_inputName2Field,arg_errorMsg);}


/*------------------??ENCODER2------------------------------------------------------------- 
  ????????????id=arg_value??(name1,name2)??¼ ?????? obj_listBox?У?listbox??ԭ?м?¼????ɾ????
  name1-> value , name2-> text 
  Ӧ??ʾ????
<SCRIPT LANGUAGE="JavaScript">
{
  var zsd = new ENCODER2();
  zsd.addOneRow(1,'aa1','aaaaaaaaa1');
  zsd.addOneRow(1,'aa2','aaaaaaaaa2');
  zsd.addOneRow(1,'aa3','aaaaaaaaa3');
  zsd.addOneRow(1,'aa4','aaaaaaaaa4');
  zsd.addOneRow(1,'aa5','aaaaaaaaa5');
  zsd.addOneRow(2,'bb1','bbbbbbbbb1');
  zsd.addOneRow(2,'bb2','bbbbbbbbb2');
  zsd.addOneRow(2,'bb3','bbbbbbbbb3');
  zsd.addOneRow(2,'bb4','bbbbbbbbb4');
  zsd.addOneRow(2,'bb5','bbbbbbbbb5');
  zsd.addOneRow(2,'bb6','bbbbbbbbb6');
  zsd.addOneRow(3,'cc1','ccccccccc1');
  zsd.addOneRow(3,'cc2','ccccccccc2');
  zsd.addOneRow(3,'cc3','ccccccccc3');
  zsd.addOneRow(3,'cc4','ccccccccc4');
  zsd.addOneRow(3,'cc5','ccccccccc5');
  zsd.addOneRow(3,'cc6','ccccccccc6');
}
</SCRIPT>  
    <form name='form2'>
        <select size="8"  name='lista' onchange="zsd.filterAndRefreshListBox(this.value,form2.listb);">
        <select size="1" name="listb"/>
    ????????listbox:lista,listb , ??lista?ж??? onchange?¼???ִ??filterAndRefreshListBox
    ?????? ??listaѡ??value=1 ʱ?????? listb?л????????м?¼??????zsd??????id=1?????м?¼(name1,name2)???ӵ?listb?? 
*/
function filterAndRefreshListBox(arg_value,obj_listBox)
{ //test in win ie6 ok 
   	//alert('begin');
    for(var i=obj_listBox.options.length-1;i>=0;i--) 
          obj_listBox.options[i]=null;
    //?????????????ļ?¼
    var v_copyCount=0;
    for (var i=0;i<this.rowCount;i++)
    { 
     // alert(i+':'+this.ids[i]+':'+this.names[i]+':'+this.name2s[i]);
      if (this.ids[i]==arg_value) 
      {  
      	  var v_o = new Option();
          v_o.value =this.names[i];
          v_o.text = this.name2s[i];
          //v_o.selected=true;
          obj_listBox.options[obj_listBox.options.length] = v_o;
          v_copyCount++;
      }
    }
    return v_copyCount;
}
function filterandrefreshlistbox(arg_value,obj_listBox)
{return this.filterAndRefreshListBox(arg_value,obj_listBox);}


/*
  ????????(id,name)?????м?¼?????? listbox?? -------------------------------------------
  ??Ӧ???ڣ?ENCODER , ENCODER2 ???? 
*/
function copyToListBox(obj_listbox)
{ //test in win ie6 ok 
   	//????listbox 
    for(var i=obj_listbox.options.length-1;i>=0;i--) 
          obj_listbox.options[i]=null;
    //??????¼
    for (var i=0;i<this.rowCount;i++)
    { 
      	  var v_o = new Option();
          v_o.value =this.ids[i];
          v_o.text = this.names[i];
          //v_o.selected=true;
          obj_listbox.options[i] = v_o;
    }
}
function copytolistbox(obj_listbox)
{return this.copyToListBox(obj_listbox);}

/*====================       Ӧ??ʾ??         ===================================
<SCRIPT LANGUAGE="JavaScript" src="./javascript/encoder.js"></SCRIPT>
<SCRIPT LANGUAGE="JavaScript">
{
  var a = new ENCODER();
  a.addOneRow2Col(1,'aa');
  a.addOneRow2Col(2,'bb');
  a.addOneRow2Col(3,'cc');
  
  alert( a.returnname(2));

  var b = new ENCODER2();
  b.addOneRow3Col(1,'aa','aaaaaa');
  b.addOneRow3Col(2,'bb','bbbbbbb');
  b.addOneRow3Col(3,'cc','cccccccc');
  alert( b.returnname2(3));
}
</SCRIPT>


===============================================================================*/