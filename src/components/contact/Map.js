const Map = () => {
  return (
    <div className="map_wrap w-full float-left clear-both h-auto mb-[50px]">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height={355}
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d799.2499119779833!2d79.73601052697683!3d11.239517123769032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54de1c3c90dfa9%3A0x1347b031b4eea1cc!2s136%2C%20Pidari%20N%20St%2C%20near%20to%20IOB%20Bank%2C%20Thenpathi%2C%20Sirkali%2C%20Tamil%20Nadu%20609110!5e0!3m2!1sen!2sin!4v1719317461421!5m2!1sen!2sin" 
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
          />
          <a href="https://fmovies-online.net">fmovies</a>
          <br />
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".mapouter{position:relative;text-align:right;height:355px;width:100%;}",
            }}
          />
          <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".gmap_canvas {overflow:hidden;background:none!important;height:355px;width:100%;}",
            }}
          />
        </div>
      </div>
      {/* Get your API here https://www.embedgooglemap.net */}
    </div>
  );
};
export default Map;
