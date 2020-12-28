function submitSearch() {
   var sform = document.getElementById("searchForm");
   var schema = document.getElementById("Version").value;

   if (schema == "fmw121200") {
	searchProc = "search";
   } else {
	searchProc = "search";
   }

   sform.action = "http://www.oracle.com/pls/" + schema + "/" + searchProc;
   sform.method = "get";
   sform.submit();
}
