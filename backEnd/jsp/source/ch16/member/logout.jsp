<%@ page contentType="text/html; charset=EUC-KR"%>
<%
      session.invalidate();
%>
<script>
   alert('�α׾ƿ� �Ǿ����ϴ�.');
   top.document.location.reload(); 
   location.href="<%=request.getContextPath()%>/ch16/left.jsp";
</script>