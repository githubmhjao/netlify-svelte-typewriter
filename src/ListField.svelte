<script>
  import { createEventDispatcher } from 'svelte';
  export let slashieList = ["Student"];

  const dispatch = createEventDispatcher();
  function handleClick(slashie) {
    dispatch('remove', slashie)
  }
</script>

<style>
  .listField {
    margin: 20px 0px;
  }

  .listField li {
    font-size: 18px;
    line-height: 40px;
    list-style: none;
    background: #eee;
    border-radius: 5px;
    padding: 0 10px;
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;
  }

  .listField li span {
    position: absolute;
    right: -40px;
    height: 100%;
    width: 40px;
    text-align: center;
    color: white;
    background: #941b0e;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .listField li:hover span {
    right: 0px;
  }
</style>

<ul class="listField">
  {#each slashieList as slashie}
    <li>{slashie}<span on:click={() => handleClick(slashie)}>X</span></li>
  {/each}
</ul>
