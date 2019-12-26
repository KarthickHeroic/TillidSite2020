
controller = new ScrollMagic.Controller();
var indexVal;
  
      
      new ScrollMagic.Scene({
          triggerHook: 'onLeave',
          triggerElement: this,
          offset:-10 
      })
      .on('leave', function () {
          console.log($(window).width())
            TweenLite.to(window, 2, {scrollTo:{x:$(window).width(),      
                                     autoKill:false},ease: Power4.easeOut})
         })
      .addTo(controller);  // scene end
      new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 'onEnter',
            offset:50 
        })
          .addTo(controller)
          .on('enter', function () { console.log($(window).width())
               indexVal = index+1;
               TweenLite.to(window, 2, {scrollTo:{y:".section"+(index+1),      
                                     autoKill:false},ease: Power4.easeOut})       
          });

}); // scene end

//anchorClickToScroll

controller.scrollTo(function (newpos) {
    TweenMax.to(window, 0.5, {scrollTo: {x: newpos}});
});

//  bind scroll to anchor links
$(".nav-item").click(function(e){
    var id = '#'+$(this).attr('page-id');
    if ($(id).length > 0) {
        e.preventDefault();

        // trigger scroll
        controller.scrollTo(id);

            // if supported by the browser we can even update the URL.
        if (window.history && window.history.pushState) {
            history.pushState("", document.title, id);
        }
    }
});





<div class="scrollWrapper">
<div class="colStripe col1">
  <div class="emptyBox100"></div>
  <div class="boxTitle">
    SharePoint
  </div>
  <div class="box">
    <ul>
      <li>SharePoint Online/On-Premise</li>
      <li>Office 365</li>
      <li>Teams</li>
      <li>Flows</li>
      <li>SharePoint Designer Workflow</li>
      <li>Custom Workflow</li>
      <li>Nintex Workflow</li>
      <li>Custom Web Part</li>
      <li>SharePoint Infrastructure </li>
      <li>SharePoint Administration</li>
    </ul>
   </div>


    <div class="colStripe col2">
    </div>

    <div class="boxTitle">
      Custom Development
    </div>
    <div class="box">
      <ul>
        <li>ASP.NET MVC</li>
        <li>Angular</li>
        <li>React</li>
        <li>VueJS</li>
        <li>WPF</li>
      </ul>
    </div>
    <div class="emptyBox200"></div>
    <div class="boxTitle">
      Enterprise Mobility
    </div>
    <div class="box">
      <ul>
        <li>Xcode IDE</li>
        <li>Android Studio</li>
        <li>Objective C</li>
        <li>Java, Kotlin</li>
        <li>Xamarin</li>
        <li>Appcelerator</li>
      </ul>
    </div>
  </div>
  <div class="colStripe col3">
    <div class="emptyBox150"></div>
    <div class="boxTitle">
      Open Source
    </div>
    <div class="box">
      <ul>
        <li>PHP</li>
        <li>Yii Framework</li>
        <li>Codeigniter</li>
        <li>Websites and Portals</li>
        <li>E-commerce Shopping Carts</li>
        <li>B2C & B2B Marketplaces</li>
      </ul>
    </div>
    <div class="boxTitle">
      MS Dynamics CRM
    </div>
    <div class="box">
      <ul>
        <li>Greenfield Implementations – Cloud & On-Premise</li>
        <li>Field Services Implementation</li>
        <li>Support and Enhancement Services</li>
        <li>Data Migration & Integration services</li>
        <li>Platform Migration</li>
        <li>Customization and Custom Development</li>
        <li>Platform Upgrade</li>
        <li>On Premise to Online conversions</li>
      </ul>
    </div>
  </div>
  <div class="colStripe col4">
    <div class="boxTitle">
      MS Dynamics GP
    </div>
    <div class="box">
      <h1>What We Do</h1>
      <ul>
        <li>Discovery & Recommendations</li>
        <li>New Implementations</li>
        <li>Upgrades</li>
        <li>Cloud Migrations</li>
        <li>Custom Development</li>
        <li>Integration</li>
        <li>3rd Party Add-ons</li>
        <li>24*7 Application Support</li>
      </ul>
      <h1>Funtional</h1>
      <ul>
        <li>Financials</li>
        <li>Supply Chain</li>
        <li>Project Management</li>
        <li>Human Resources</li>
        <li>Field Service</li>
        <li>BI & Reporting </li>
        <li>Etc</li>
      </ul>
      <h1>Technical</h1>
      <ul>

        <li>Dexterity/.Net Customizations</li>
        <li>Dexterity Report Writer/Crystal Reports</li>
        <li>Modifier</li>
        <li>Etc</li>
      </ul>
    </div>
  </div>
</div>

</div>