/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */

/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}

const count = { number: 0 };

function render() {
  function handleClick(value) {
    count.number = value;
    render();
  }

  function handleClickNumber(value) {
    count.number = value;
    render();
  }

  const { number } = count;
  const element = (
    <div id="hello" className="greeting">
      <p>
        <button type="button" onClick={() => handleClick(number + 1)}>
          Click me!
          (
          {number}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
