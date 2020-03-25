# Rewrite the index_of method using recursion instead of a while loop.

class Node

  attr_accessor :data, :next_node

  def initialize(data)
    @data = data
  end

end

class LinkedList

  attr_accessor :first_node

  def initialize(first_node)
    @first_node = first_node
  end

  def index_of(value)
    current_node = @first_node
    current_index = 0

    begin
      return current_index if current_node.data == value
      current_node = current_node.next_node
      current_index += 1
    end while current_node
    
      return nil
  end

end