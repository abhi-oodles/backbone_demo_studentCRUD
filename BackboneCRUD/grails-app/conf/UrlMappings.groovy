class UrlMappings {

	static mappings = {
		"/$controller/$action?/$id?"{
			constraints {
				// apply constraints here
			}
		}
		"/college/student/$id?" (resource:"student") {
			constraints {
			
			}
		}
		"/"(uri:"/index.html")
		"500"(view:'/error')
	}
}
