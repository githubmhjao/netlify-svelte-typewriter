<script>
  import InputField from "./InputField.svelte"
  import ListField from "./ListField.svelte"
  import FooterField from "./FooterField.svelte"
  import ToastField from "./ToastField.svelte"
  import typeWriter from "./typeWriter.js"
  import { toastContent, progressBar } from './store.js'

  const slashieListDefault = ["Student"]
  let slashieList = slashieListDefault
  const timeoutDuration = 5000
  let timeoutId
  
  function handleAdd(e) {		
    clearTimeout(timeoutId)
		progressBar.set(1, {duration: 10})
    slashieList = [...slashieList, e.detail]
    $toastContent = {
      action: "Add ",
      targetSlashie: e.detail,
      description: " as your new slashie"
      }
		progressBar.set(0, {duration: timeoutDuration})
    timeoutId = setTimeout(() => $toastContent = "", timeoutDuration)
  }
  function handleRemove(e) {
    clearTimeout(timeoutId)
		progressBar.set(1, {duration: 10})
    slashieList = slashieList.filter(x => x !== e.detail)
    $toastContent = {
      action: "Remove ",
      targetSlashie: e.detail,
      description: " from your slashie"
      }
		progressBar.set(0, {duration: timeoutDuration})
    timeoutId = setTimeout(() => $toastContent = "", timeoutDuration)
  }
  function handleReset() {
    clearTimeout(timeoutId)
		progressBar.set(1, {duration: 10})
    slashieList = slashieListDefault
    $toastContent = {
      action: "Reset",
      targetSlashie: "",
      description: " all your slashie"
      }		
		progressBar.set(0, {duration: timeoutDuration})
    timeoutId = setTimeout(() => $toastContent = "", timeoutDuration)
  }
</script>

<main>
	<h2>Hello!</h2>
	<h1>I'm a <span class="slashie" use:typeWriter={slashieList}>Student</span></h1>
  <div class="wrapper">
    <InputField on:add={handleAdd}/>
    <ListField {slashieList} on:remove={handleRemove} />
    <FooterField {slashieList} on:reset={handleReset} />
  </div>
  <ToastField />
</main>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :global(body) {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f2f2f2;
  }
  main {
    font-family: sans-serif;
  }
  h1 .slashie {
    color: #ff3e00;
    position: relative;
  }
  h1 .slashie:before {
    content: "";
    width: 0;
    height: 100%;
    background: black;
    position: absolute;
    right: -5px;
    border-left: 3px solid #ff3e00;
  }
  .wrapper {
    margin-top: 20px;
    padding: 15px;
    background: white;
    border-radius: 5px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }
</style>
