<script>
    import {goto} from "$app/navigation";
    function goHome() {
        goto("/");
    }
</script>

<h1>Thank you</h1>
<p>Your session has ended.</p>
<button type="button" class="pill-button" on:click={goHome}>Go to homepage</button>

<style>
    .pill-button {
        display: inline-block;
        background-color: #890000;
        color: white;
        padding: 10px 20px;
        border-radius: 50px;
        text-decoration: none;
        font-family: 'Baloo 2 Variable', sans-serif;
        font-size: 16px;
        cursor: pointer;
    }
</style>