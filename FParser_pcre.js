with( FParser ) new function(){

	var wrapControl= FWrapper( 'std:lang-pcre-control' )
	var wrapGhost= FWrapper( 'std:lang-pcre-ghost' )

	lang.pcre_content= FParser( new function(){
		
		this.escaping= new function(){
			this.regexp= /\\([\s\S])/
			var marker= wrapGhost( '\\' )
			this.handler= function( symbol ){
				return [ marker, symbol ]
			}
		}

		this.control= new function(){
			this.regexp= /([(){}\[\]$^])/
			this.handler= wrapControl
		}

	})

	lang.pcre= FPipe( lang.pcre_content, FWrapper( 'std:lang-pcre' ) )

}
