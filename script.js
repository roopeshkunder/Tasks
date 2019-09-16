// Code goes here
angular.module('myapp',['myapp.controller']);

angular.module('myapp.controller',['myapp.service'])
  .controller('testController',function($scope,testService){
	  $scope.loaded = false;
	var pageNumber=1;
    $scope.posts={};
	
	$scope.addRecords = [];
	
	$scope.dataContainer = {};
    function GetAllPosts() {
		 
      var getPostsData = testService.getPosts(pageNumber);

      getPostsData.then(function (post) {
		 
		 $scope.dataContainer =  post.data.results;
		  
        $scope.addRecords.push($scope.dataContainer);
		
		 if(post.data["next"]!=null)
		 {
		 
		 pageNumber++;
		GetAllPosts();
		 }
		 else{
			$scope.loaded = true;
			 $scope.posts = $scope.addRecords;
			 calculateHeight();
			 calculateEyeColour();
			 calculateAgeDifference();
			 
			// $scope.min = Math.min.apply(Math,$scope.posts.map(function(item){return item.birth_year;}));

			//$scope.max = Math.max.apply(Math,$scope.posts.map(function(item){return item.birth_year;}));
			
			// alert("Data Received");
		 }

      }, function () {
         alert('Error in getting post records');
      });
	  
    }
	
	function calculateHeight()
		{
			var totalCharactersWithAvailableHeight=0;
			//var heightArray=[];
			var totalHeight=0;
			for(i=0;i<$scope.posts.length;i++)
			{
				for(j=0;j<$scope.posts[i].length;j++)
				{
					if($scope.posts[i][j].height!="unknown")
					{
						totalHeight = totalHeight + Number($scope.posts[i][j].height);
						totalCharactersWithAvailableHeight++;
						//heightArray.push($scope.posts[i][j].height);
					}
				
				}
			}
			
			var average = Number(totalHeight)/Number(totalCharactersWithAvailableHeight);
			$scope.averageHeight = average.toFixed(2);
			
		}
		
	function calculateAgeDifference()
	{
		var ageArray=[];
		for(i=0;i<$scope.posts.length;i++)
			{
				for(j=0;j<$scope.posts[i].length;j++)
				{
					if($scope.posts[i][j].birth_year!="unknown")
					{
						var string = String($scope.posts[i][j].birth_year).replace("BBY", "");;
						
						ageArray.push(Number(string));
						
						
					}
				
				}
			}
		//alert(ageArray);
	$scope.oldest =	Math.max.apply(null, ageArray) // 4
$scope.youngest = Math.min.apply(null, ageArray) // 1

$scope.differenceInAges = $scope.oldest - $scope.youngest;

$scope.oldest = $scope.oldest +"BBY";
$scope.youngest = $scope.youngest + "BBY";
	}
		
	function calculateEyeColour()
	{
	
	$scope.eyecolorBrown=0;
	$scope.eyecolorBrownCharacters = [];
	
	$scope.eyecolorBlack=0;
	$scope.eyecolorBlackCharacters = [];
	
	$scope.eyecolorHazel=0;
	$scope.eyecolorHazelCharacters = [];
	
	$scope.eyecolorDark=0;
	$scope.eyecolorDarkCharacters = [];
	
	$scope.eyecolorWhite=0;
	$scope.eyecolorWhiteCharacters = [];
	
	$scope.eyecolorGold=0;
	$scope.eyecolorGoldCharacters = [];
	
	$scope.eyecolorBlue=0;
	$scope.eyecolorBlueCharacters = [];
	
	$scope.eyecolorYellow=0;
	$scope.eyecolorYellowCharacters = [];
	
	$scope.eyecolorOrange=0;
	$scope.eyecolorOrangeCharacters = [];
	
	$scope.eyecolorPink=0;
	$scope.eyecolorPinkCharacters = [];
	
	$scope.eyecolorRed=0;
	$scope.eyecolorRedCharacters = [];
	
	$scope.eyecolorBlueGray=0;
	$scope.eyecolorBlueGrayCharacters = [];
	
	//brown, black, hazel, dark, white, gold, blue, yellow, orange, pink, red, blue-gray
			//var heightArray=[];
			//var totalHeight=0;totalCharacters
			for(i=0;i<$scope.posts.length;i++)
			{
				for(j=0;j<$scope.posts[i].length;j++)
				{
					if($scope.posts[i][j].eye_color!="unknown")
					{
						if($scope.posts[i][j].eye_color=="brown")
						{
							$scope.eyecolorBrown++;
							$scope.eyecolorBrownCharacters.push($scope.posts[i][j].name);
						}
						if($scope.posts[i][j].eye_color=="black")
						{
							$scope.eyecolorBlack++;
							$scope.eyecolorBlackCharacters.push($scope.posts[i][j].name);
						}
						if($scope.posts[i][j].eye_color=="hazel")
						{
							$scope.eyecolorHazel++;
							$scope.eyecolorHazelCharacters.push($scope.posts[i][j].name);
						}
						if($scope.posts[i][j].eye_color=="dark")
						{
							$scope.eyecolorDark++;
							$scope.eyecolorDarkCharacters.push($scope.posts[i][j].name);
							
						}
						if($scope.posts[i][j].eye_color=="white")
						{
							$scope.eyecolorWhite++;
							$scope.eyecolorWhiteCharacters.push($scope.posts[i][j].name);
							
						}
						if($scope.posts[i][j].eye_color=="gold")
						{
							$scope.eyecolorGold++;
							$scope.eyecolorGoldCharacters.push($scope.posts[i][j].name);
							
						}
						if($scope.posts[i][j].eye_color=="blue")
						{
							$scope.eyecolorBlue++;
							$scope.eyecolorBlueCharacters.push($scope.posts[i][j].name);
							
						}
						if($scope.posts[i][j].eye_color=="yellow")
						{
							$scope.eyecolorYellow++;
							$scope.eyecolorYellowCharacters.push($scope.posts[i][j].name);
							
						}
						if($scope.posts[i][j].eye_color=="orange")
						{
							$scope.eyecolorOrange++;
							$scope.eyecolorOrangeCharacters.push($scope.posts[i][j].name);
							
						}
						if($scope.posts[i][j].eye_color=="pink")
						{
							$scope.eyecolorPink++;
							$scope.eyecolorPinkCharacters.push($scope.posts[i][j].name);
							
						}
						if($scope.posts[i][j].eye_color=="red")
						{
							$scope.eyecolorRed++;
							$scope.eyecolorRedCharacters.push($scope.posts[i][j].name);
							
						}
						if($scope.posts[i][j].eye_color=="blue-gray")
						{
							$scope.eyecolorBlueGray++;
							$scope.eyecolorBlueGrayCharacters.push($scope.posts[i][j].name);
							
						}
					}
				
				}
			}
			
		

	}	

          
    GetAllPosts();
});

angular.module('myapp.service',[])
  .service('testService', function ($http) {

    //get data
    this.getPosts = function (number) {

       return $http.get('https://swapi.co/api/people/?page='+number);
    };
 });
