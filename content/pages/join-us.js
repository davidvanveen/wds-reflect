<Section
  headerImage="hero/joinus.jpg"
  headerClip="rl_header"
  headerPosition="top"
  headerSize="thin"
  color="white"
  preload
>
  <Image src="heading/script-joinUs.png" width="446px" height="196px" className="scriptHeader" align="center" css={{ float: 'none' }} preload/>
  <Block width="600px" css={{ color: 'orange', marginTop: '80px' }}>
    <h2 style={{ marginBottom: '4px' }}>World Domination Summit 2017:</h2>
    ## July 11 - 17, 2017 in Portland, Oregon
  </Block>
  <Block cols="6" className="bigger" mobile={{ all:{ padding: '0 50px', marginBottom: '20px' }, phone: { padding: '0 20px' } }}>

    Since 2011, WDS has brought together more than 10,000 people from more than forty countries. As adventurers from all walks of life, our mission is to create a remarkable community that helps each person pursue a big dream. 

    With discussions and activities on topics like how to live a good life, travel hacking your way around the globe, and writing your first book, it’s an experience like no other.
    
    We’re doing it again in 2017, and all that’s missing is YOU!
    
    <Button to="/be-there" fitToText>Join Us!</Button>
  </Block>
</Section>
<Section color="canvas" bound={false}>
  <Block margin="125px 0 50px 0">
    ## What's Included in My Ticket
    <Grid numCols="2" tabletCols="2" block={{ className: 'dropped-button' }} equalize>
      <Block type="image" src="photos/JoinUs/image-meetups.jpg">
        ## Meetups
        Each year attendees help lead over 100+ meetups in and around Portland. Share your expertise. Coordinate an adventure. The best part is you can do both!
      </Block>
      <Block type="image" src="photos/JoinUs/image-people.jpg">
        ## Incredible People
        Our incredible adenturers come from over 40+ different countries and all 50 states. At WDS there will be abundance of opportunities to make new connections.
      </Block>
      <Block type="image" src="photos/JoinUs/image-academies.jpg">
        ## Academies
        These half-day workshops are the only event offered to the general public. As a WDS ticket holder you get first access to the Academy of your choice at a huge discount.
      </Block>
       <Block type="image" src="photos/JoinUs/image-hotel.jpg">
        ## Hotel Discounts
        Each year we partner with iconic Portland properties to offer our attendees special discounted prices booking your stay in Portland.  
      </Block>
      <Block type="image" src="photos/JoinUs/image-parties.jpg">
        ## Celebrations
        There's nothing better than celebrating community. Kick-off WDS and meet new friends at the welcome party and dance the night away with them at the closing celebration.
      </Block>
      <Block type="image" src="photos/JoinUs/image-communities.jpg">
        ## Community
        Once you attend WDS you'll become an alum and part of a global network of over 10,000 adventurers who will continue to support you and your journey. 
      </Block>
    </Grid>
  </Block>
</Section>
<Import id="buy-box" />
