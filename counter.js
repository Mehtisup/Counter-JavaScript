<script>
setInterval(myNumber, 100);
var $numb = 0;
function myNumber() {
    document.getElementById("number")
    .innerHTML = ++$numb;
    if ($numb == 421) {
        document.getElementById("number")
        .style.display = "none";
        document.getElementById("number2")
        .innerHTML = "420";
    }
}
</script>
