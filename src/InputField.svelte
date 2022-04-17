<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let slashieValue = ""
  $: disabled = slashieValue.trim() === ""

  function handleClick() {
    dispatch('add', slashieValue)
    slashieValue = ""
  }
</script>

<style>
  .inputField {
    display: flex;
    height: 40px;
  }

  .inputField input {
    font-size: 20px;
    width: 85%;
    height: 100%;
    padding: 0 15px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }

  .inputField button {
    width: 40px;
    height: 100%;
    font-size: 30px;
    color: white;
    background: #ff3e00;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .inputField button:disabled {
    background: rgba(255, 62, 0, 0.7);
    cursor: auto;
  }

  .inputField input:focus {
    outline: 4px solid rgba(71, 166, 255, 0.5);
    outline-offset: 0;
  }
</style>

<div class="inputField">
  <input bind:value={slashieValue} placeholder="Add new slashie">
  <button on:click={handleClick} {disabled}>+</button>
</div>
