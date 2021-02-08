const Wheel = () => {
  return (
    <div>
      <h1>wheel</h1>
      
      <div id="wheel">
            <div id="inner-wheel">
                <div class="sec"><span class="fa fa-bell-o"></span></div>
                <div class="sec"><span class="fa fa-comment-o"></span></div>
                <div class="sec"><span class="fa fa-smile-o"></span></div>
                <div class="sec"><span class="fa fa-heart-o"></span></div>
                <div class="sec"><span class="fa fa-star-o"></span></div>
                <div class="sec"><span class="fa fa-lightbulb-o"></span></div>  
            </div>       
           
            <div id="spin">
                <div id="inner-spin"></div>
            </div>
            
        </div>
        
        
        <div id="txt"></div>

    </div>
  );
};

export default Wheel;
