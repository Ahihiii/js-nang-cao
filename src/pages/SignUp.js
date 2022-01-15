const SignUp = {
    render() {
        return `
         <div class="bg-[url('././images/bg.jpg')] min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md h-screen pt-20 w-full space-y-8">
          <div>
            <img class="mx-auto h-40 w-auto" src="../../images/g_t_a_logo.png" alt="Workflow">
            <h2 class="mt-6 text-white text-center text-3xl font-extrabold">
              Sign up account
            </h2>
            
          </div>
          <form class="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
              </div>
              <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
              </div>
            </div>
      
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                
                <label for="remember-me" class="ml-2 block text-sm text-white">
                  
                </label>
              </div>
      
              <div class="text-sm">
                <a href="Singup" class="font-medium text-orange-500 hover:text-orange-600">
                  Sign In
                </a>
              </div>
            </div>
      
            <div>
              <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <!-- Heroicon name: solid/lock-closed -->
                  
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
      `;
    },
};

export default SignUp;