




<script language="JavaScript" src="javascript/basic.js"    ></script>
<script language="JavaScript" src="javascript/operation.js"></script>
<script language="JavaScript" src="javascript/checkForm.js"></script>
<script language="JavaScript" src="javascript/UrlManager.js"></script>
<script language="JavaScript" src="javascript/MyQuickSelect.js"></script>
<script language="JavaScript" src="javascript/dateSelect.js"></script>
<script language="javascript" src="javascript/jquery-1.3.1.min.js"></script>
<script language="JavaScript" src="javascript/encoder.js"></script>
<script language="JavaScript" src="javascript/multiTags.js"></script>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=GBK"/>
<title>excel?????ռ???????</title>

<link href="css/teacher_default.css" rel="stylesheet" type="text/css">


<link href="../css/teacher_default.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<div id="right">

<form name='excelform' id='excelform' method='post' action='douploadexcel?action=bill_import_from_excel&start=importExcel' enctype='multipart/form-data' target="dm">
<table width="100%"  class="tableList">
<tr class="tableListHeader">
    <td colspan="2">??1????ѡ?????ϴ?Excel?ļ?:</td>
  </tr>
  <tr>
    <td width="80"  class="rowList0">Excel?ļ???</td>
    <td  class="rowList1"><input type='file' class='fileList' name='filename' value='' size='70'/></td>
  </tr>
  <tr><td  class="rowList0"></td><td  class="rowList1">
      <input  type="submit" value="?ϴ?????" class="buttoncommon"/>
      <input type="button" value="?رմ???" onClick="window.close()" class="buttoncommon"/>
      </td>
  </tr>
  
  <tr>
    <td colspan="2">
      ע??<FONT color="#ff3333">Excel?ļ?ֻ?????ڵ????ռ??????ݣ???һ??Ϊ &nbsp;?????У??ڶ???Ϊ &nbsp;?�???????????п?ʼΪ &nbsp;?�???ݡ?</FONT>
      <br><b>????ͼ??ʾ??</b>
      <br><img src="images/import_data_from_excel.jpg">
    </td>
  </tr>
  
</table>
<iframe name='dm' id='dm' width='0' height='0'></iframe>
</form>
</div>
</body>
</html>
