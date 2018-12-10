# React simple linear Accordion
A simple accordion component that made use of react state and props.

## Props
The ```Accordion``` component has 1 required props (datas).   
Format for datas:   
```javascript
datas: [{
  title: <heading for per accordion item>,
  id: <unique item id>,
  content: <html content for item>
}]
```

## Usage
### index.js
```javascript
const datas = [{
  "title": "Heading 1",
  "id": 1,
  "content": 
    <div key="1">
      <p>content1</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur fugit ea, rerum est iste deserunt nesciunt autem itaque quaerat optio aperiam blanditiis corporis error ullam at voluptates quasi placeat provident!</p>
    </div>
},
{
  "title": "Heading 2",
  "id": 2,
  "content": 
    <div>
      <p>content 2</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit nulla eum quo tenetur! Magni, unde id eaque officia magnam modi repellat consequatur, pariatur quis distinctio eius, itaque fuga? Quia, non.</p>
    </div>
},
{
  "title": "Heading 3",
  "id": 3,
  "content": 
    <div>
      <p>content 3</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit nulla eum quo tenetur! Magni, unde id eaque officia magnam modi repellat consequatur, pariatur quis distinctio eius, itaque fuga? Quia, non.</p>
    </div>
}]
console.log(datas);


ReactDOM.render(<div>
  <Accordion
    datas={datas}
  /></div>, document.getElementById("root"));
```
