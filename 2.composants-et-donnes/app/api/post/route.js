export async function GET(request){
    return new Response(
        JSON.stringify([
        { 
         userId:999 ,
         id :100 ,
         title : 'Hello, world!', 
         body : 'This is a test post',
        }]),
        { status: 200 ,
         headers: { 'Content-Type': 'application/json' } 
        },
   )
}