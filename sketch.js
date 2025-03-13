<script type="text/javascript">
var inboxs = new Array();
inboxs['hidezeronumberitem'] = "yes";
inboxs['selectors'] = '.tooltips_list {">"} span';
inboxs['navitemdefaultsize'] = '12px'; 
inboxs['navitemselectedsize'] = '14px';
inboxs['number'] = "no";
jQuery(document).ready(function () {
	jQuery('.member_directory_table').directory(inboxs);
		jQuery('.navitem').css('font-size','12px');	
})
</script>