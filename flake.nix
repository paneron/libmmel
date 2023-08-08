{
  description = "libmmel Development Environment";
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    devshell.url = "github:numtide/devshell/main";
    flake-compat = {
      url = "github:edolstra/flake-compat";
      flake = false;
    };
  };
  outputs =
    { self, nixpkgs, flake-utils, devshell, flake-compat, ... }:
    flake-utils.lib.eachDefaultSystem (system:
    let
      cwd = builtins.toString ./.;
      overlays = map (x: x.overlays.default) [
        devshell
      ];
      pkgs = import nixpkgs { inherit system overlays; };
    in
    rec {

      packages = {
        # nix build .#packages.aarch64-darwin.libmmel
        # nix build .#libmmel
        # libmmel = ???
        # default = packages.libmmel;
      };
      # defaultPackage = packages.default;

      # nix develop
      devShell = pkgs.devshell.mkShell {
        env = [
        ];
        packages = with pkgs; [
          node2nix
        ];
      };
    });
}
