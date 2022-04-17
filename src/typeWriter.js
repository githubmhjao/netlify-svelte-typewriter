export default function typeWriter(node, list) {
  function type(l) {
    return [...l].map((_, i) => l.slice(0, i + 1))
  }
  function show(l, time) {
    return [...Array(time)].map(_ => l)
  }
  function hide(time) {
    return [...Array(time)].map(_ => "")
  }
  function generateTxt(l) {
    return [...type(l), ...show(l, 10), ...type(l).reverse(), ...hide(10)]
  }

  let i = 0
  let listTxt = list.map(l => generateTxt(l)).flat()
  let listTxtLength = listTxt.length
  let intervalId = setInterval(() => {
    node.innerHTML = listTxt[i % listTxtLength]
    i++
  }, 100)

  return {
    update(list) {
      clearInterval(intervalId)
      i = 0
      listTxt = list.map(l => generateTxt(l)).flat()
      listTxtLength = listTxt.length
      intervalId = setInterval(() => {
        node.innerHTML = listTxt[i % listTxtLength]
        i++
      }, 100)
    }
  }
}
