const Wheel = () => {
  return (
    <div>
      <h1>wheel</h1>
      
      <div id="wheel">
      <div class="spinner-table"> 
			<div class="dial">
				<div class="slice"><div class="label">1</div></div>
				<div class="slice"><div class="label">2</div></div>
				<div class="slice"><div class="label">3</div></div>
				<div class="slice"><div class="label">4</div></div>
				<div class="slice"><div class="label">5</div></div>
				<div class="slice"><div class="label">6</div></div>
				<div class="slice"><div class="label">7</div></div>
				<div class="slice"><div class="label">8</div></div>
				<div class="slice"><div class="label">9</div></div>
				<div class="slice"><div class="label">10</div></div>
				<div class="slice"><div class="label">11</div></div>
				<div class="slice"><div class="label">12</div></div>
			</div>
		</div>
		<div class="arrow">
			<span class="pointer"></span>
		</div>
	</div>
	
	<div class="content-container">
		<div class="pre">
			<button id="spin">Spin</button>
		</div>
        </div>
        
    </div>
  );
};

export default Wheel;
