export const Modal = ({children, open, onClose, style}) => {
  if (!open)
	return null;

  return (
	<div className="overlay">
		<div className="modal" style={style}>
			<button className="close-modal" onClick={onClose}>X</button>
			{children}
		</div>
	</div>
  );
}