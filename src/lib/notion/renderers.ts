import React from 'react'
import components from '../../components/dynamic'

function applyTags(tags = [], children, noPTag = false, key) {
  let child = children

  for (const tag of tags) {
    const props: { [key: string]: any } = { key }
    let tagName = tag[0]

    if (noPTag && tagName === 'p') tagName = React.Fragment
    if (tagName === 'c') tagName = 'code'

    if (tagName === 'a') {
      props.href = tag[1]
    }

    child = React.createElement(components[tagName] || tagName, props, child)
  }
  return child
}

const CJKTester = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/g

export function textBlock(text = [], noPTag = false, mainKey) {
  const children = []
  let key = 0

  for (const textItem of text) {
    key++
    if (textItem.length === 1) {
      children.push(textItem)
      continue
    }
    children.push(applyTags(textItem[1], textItem[0], noPTag, key))
  }

  const includesCJKV = Number(text.toString().match(CJKTester)?.length) > 5
  const props: any = { key: mainKey }
  if (includesCJKV && !noPTag) {
    props.className = 'zh-han'
  }

  return React.createElement(
    noPTag ? React.Fragment : components.p,
    props,
    ...children,
    noPTag
  )
}
