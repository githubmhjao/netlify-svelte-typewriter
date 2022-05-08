<script>
  import { elasticOut } from 'svelte/easing';
  import { fly, fade } from 'svelte/transition';

  import { toastContent, progressBar } from './store.js';

  function handleClick() {
    $toastContent = { action: "", targetSLashie: "", description: "" }
  }

  $: { let { action, targetSlashie, description } = $toastContent }
	$: width = `${$progressBar * 100}%`
</script>

{#if $toastContent.action}
    <div 
      class="toast" 
      in:fly={{ x: 200, easing: elasticOut }} 
      out:fade={{ duration: 200 }}
      on:click={handleClick}
    >{$toastContent.action}<span>{$toastContent.targetSlashie}</span>{$toastContent.description}
      <div class="progress" style:width></div>
    </div>
{/if}

<style>
.toast {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px;
    border-radius: 5px;
    min-width: 300px;
    background: #fff;
    overflow: hidden;
    z-index: 100;
    cursor: pointer;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }

  .toast span {
    color: #ff3e00;
    font-weight: bold;
  }

  .toast .progress {
    position: absolute;
    height: 4px;
    bottom: 0px;
    left: 0px;
    background: #ff3e00;
  }
</style>
