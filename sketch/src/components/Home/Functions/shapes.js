module.exports = {
 circle: (width, height, borderRadius, border, borderColor, position, top, left, blur, rotate, imageUrl, backgroundSize, backgroundPosition) => {
     var circleStyle = {width: width ? width : 200, height: height ? height : 200, borderRadius: '50%', border: border ? border : null, borderColor: borderColor ? borderColor : null, position: 'absolute', top: top ? top : null, left: left ? left : null, boxShadow: boxShadow ? boxShadow : null, filter: `blur(${blur}px)`, transform: rotate ? `rotate(${rotate})` : null, backgroundImage: imageUrl ? `url(${imageUrl})` : null, backgroundSize: backgroundSize ? backgroundSize : null, backgroundPosition: backgroundPosition ? backgroundPosition : null}
  return (
      <div style = {circleStyle}></div>
  )
 },

 square: (width, height, border, borderColor, position, top, left, blur, rotate, imageUrl, backgroundSize, backgroundPosition) => {
     var squareStyle = {width: width ? width : 200, height: height ? height : 200, border: border ? border : 2, borderColor: borderColor ? borderColor : '#000000', position: 'absolute', top: top ? top : null, left: left ? left : null, boxShadow: boxShadow ? boxShadow : null, filter: blur ? `blur(${blur}px)` : null, transform: rotate ? `rotate(${rotate})`: null, backgroundImage: imageUrl ? `url(${imageUrl})` : null, backgroundSize: backgroundSize ? backgroundSize : null, backgroundPosition: backgroundPosition ? backgroundPosition : null}
    return (
        <div style = {squareStyle}></div>
    )
 }
}