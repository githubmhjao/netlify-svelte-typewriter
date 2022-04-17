<script>
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()

  export let slashieList = ["Student"]
  $: slashieNumber = slashieList.length;
  $: article = slashieNumber === 1? "field": "fields"

  function handleClick() {
    console.log("reset")
    dispatch("reset", "")
  }
</script>

<style>
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
  }

  .footer .text {
    font-size: 16px;
    color: #777;
  }

  .footer .text span {
    color: #ff3e00;
    font-weight: 600;
  }

  .footer button {
    font-size: 18px;
    color: white;
    background: #ff3e00;
    padding: 5px 10px;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
  }
</style>


<div class="footer">
  <div class="text">I have talent in <span>{slashieNumber}</span> different {article}</div>
  <button on:click={handleClick}>Reset</button>
</div>
