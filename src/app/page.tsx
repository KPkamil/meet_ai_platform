"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { data: session } = authClient.useSession();

  const onSubmit = () => {
    authClient.signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onError: () => {
          window.alert("Error creating user");
        },
        onSuccess: () => {
          window.alert("User created successfully");
        },
      }
    );
  };

  const onLogin = () => {
    authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onError: () => {
          window.alert("Error logging in");
        },
        onSuccess: () => {
          window.alert("Logged in successfully");
        },
      }
    );
  };

  if (session) {
    return (
      <div className="flex flex-col p-4 gap-y-4">
        <p>Logged in as {session.user.name}</p>
        <Button onClick={() => authClient.signOut()}>Sign out</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-10">
      <div className="p-4 flex flex-col gap-4">
        <Input
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={onLogin}>Log in</Button>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <Input
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={onSubmit}>Create user</Button>
      </div>
    </div>
  );
}
